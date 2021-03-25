class EventEmitter {
  constructor() {
    this._listeners = {};
  }

  on(event: string | number, fn: function, thisContext: any = null): void { }

  off(event: string | number, fn: function): void { }

  emit(event: string, payload: any): void { }
}

/**
 @type {AuthPlugin}
 */
let instance: AuthPlugin;

class AuthPlugin extends EventEmitter {
  AUTH_EVENTS = {
    LOADING: "LOADING",
    LOADED: "LOADED",
    AUTHENTICATED: "AUTHENTICATED"
  }
  options: AuthServiceMethodOptions
  loading: boolean
  isAuthenticated: boolean
  user: object
  userInfo: object
  identity: object
  bearer: string

  /** Authenticates the user using a popup window */
  async loginWithPopup(o?: AuthServiceMethodOptions): Promise<void> { }
  /** Handles the callback when logging in using a redirect */
  async handleRedirectCallback(): void { }
  /** Authenticates the user using the redirect method */
  loginWithRedirect(o?: AuthServiceMethodOptions = {}): void { }

  /**
   * Returns the access token. If the token is invalid or missing, a new one is retrieved
   * @param {AuthServiceMethodOptions} [o]
   */
  getTokenSilently(o: AuthServiceMethodOptions): void { }
  /**
   * @param {string[] | string} permissions
   */
  hasPermissions(permissions: string[] | string): boolean { }

  /**
   * @param {string[] | string} roles
   */
  hasRoles(roles: string[] | string): boolean { }

  /** Logs the user out and removes their session on the authorization server */
  logout(o?: AuthServiceMethodOptions): void { }
}

const Auth0Provider = {
  /**
 * @param {{ onRedirectCallback: () => void; domain: string, audience: string, clientId: string  }} options
 */
  initialize(options: { onRedirectCallback: () => void; domain: string; audience: string; clientId: string; }): AuthPlugin { return new AuthPlugin(options) },
  async authGuard(to: RouterItem, from: RouterItem, next: () => Promise<void>): Promise<void> { },
}

interface RouterItem {
  fullPath: string
}

interface AuthServiceMethodOptions {
  display?: 'page' | 'popup' | 'touch' | 'wap',
  prompt?: 'none' | 'login' | 'consent' | 'select_account',
  max_age?: string | number,
  ui_locales?: string,
  id_token_hint?: string,
  login_hint?: string,
  acr_values?: string,
  scope?: string,
  audience?: string,
  connection?: string,
  [key: string]: any
}



