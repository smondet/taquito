import { Token, TokenFactory } from './token';

export class KeyToken extends Token {
  static prim = 'key';

  constructor(
    protected val: { prim: string; args: any[]; annots: any[] },
    protected idx: number,
    protected fac: TokenFactory
  ) {
    super(val, idx, fac);
  }

  public Execute(val: any): { [key: string]: any } {
    return val.string;
  }

  public ExtractSchema() {
    return KeyToken.prim;
  }
}
