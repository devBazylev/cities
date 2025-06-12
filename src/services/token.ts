// const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

// export type Token = string;

// export const getToken = (): Token => {
//   const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
//   return token ?? '';
// };

// export const saveToken = (token: Token): void => {
//   localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
// };

// export const dropToken = (): void => {
//   localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
// };

export class Token {
  private static _name = 'six-cities-token';

  static get() {
    const token = localStorage.getItem(this._name);

    return token ?? '';
  }

  static save(token: string) {
    localStorage.setItem(this._name, token);
  }

  static drop() {
    localStorage.removeItem(this._name);
  }
}
