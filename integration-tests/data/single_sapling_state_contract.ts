export const singleSaplingStateContract = `storage (sapling_state 8);
parameter (list (pair (sapling_transaction 8) (option key_hash) ) );
code { # Stack manipulation
       UNPAIR;
       NIL operation;
       SWAP;
       DIP { SWAP};
       AMOUNT ;
       SWAP ;
       DIP {SWAP} ;
       ITER { UNPAIR;
              DIP { SWAP };
       # We verify the transaction and update the storage if the transaction is
       # valid. The shielded transactions are handled here.
       # The new state is pushed on top of the stack in addition to the balance
       # of the transaction. If the rest of the script goes well, this state
       # will be the new state of the smart contract.
              SAPLING_VERIFY_UPDATE;
       # In the case of an invalid transaction, we stop.
              ASSERT_SOME;
              UNPAIR;
              # Convert the balance in mutez, keeping the signed
              # balance on top of the stack and the balance in mutez as the second
              # element
              DUP;
              DIP { ABS; # in case of negative balance i.e. shielding
                    PUSH mutez 1;
                    MUL; };
              # We have three cases now: unshielding, shielding and transfers.
              # If the balance is strictly positive (i.e. unshielding), we send funds
              # to the given address.
              # If no address is given (see ASSERT_SOME), we stop
              IFGT {
                     DIIP { ASSERT_SOME;
                            IMPLICIT_ACCOUNT };
                     SWAP;
                     DIP { UNIT;
                           TRANSFER_TOKENS;
                           SWAP;
                           # Stack manipulation to order. The operations will consist of the
                           # TRANSFER_TOKEN operation.
                           DIP {CONS} ;};
                   }
                   # If the balance is negative or 0 (i.e. shielding or transfer),
                   # we verify the amount transferred in the transaction is exactly the
                   # balance of the verify_update output. It does enforce the conversion
                   # 1-1 between mutez and shielded token.
                   # No operation is executed.
                   {
                     DIIP {SWAP};
                     DIP {SWAP};
                     SWAP;
                     SUB_MUTEZ; ASSERT_SOME;
                     # As we transfer or shield token, an implicit account is not
                     # required. It is a good practice to verify.
                     # If an implicit account has been given, it might be an invalid
                        # operation or a call error.
                     DIIP { ASSERT_NONE;};
                     SWAP;
                   };
            };
       DIP {
             PUSH mutez 0;
             ASSERT_CMPEQ;};
       SWAP;
       PAIR}`