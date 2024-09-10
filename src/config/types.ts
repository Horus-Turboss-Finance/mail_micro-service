export interface appCritic {
    EMAILAPIPRIVATEKEY : string,
    EMAILPUBLICADRESS : string,
    URLAPP : string,
}

export interface RespExcept {
    status : number;
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    reason : any;  
    title : string;
    send () : object
}

export const errorCode = {
    NotFound : "NotFound", /* 404 */
    Forbidden : "Forbidden", /* 403 */
    IMATeapot : "IMATeapot", /* 418 */
    BadRequest : "BadRequest", /* 400 */
    Unauthorized : "Unauthorized", /* 401 */
    UnknownError : "UnknownError", /* 500 */
    ToManyRequest : "ToManyRequest", /* 429 */
    PaymentRequired : "PaymentRequired", /* 402 */
    MethodNotAllowed : "MethodNotAllowed", /* 405 */
}

export const SuccessCode = {
    Success : "Success", /* 200 */
    OK : "OK" /* 201 */
}

export const EmailType = {
    ForgotPassword : "FORGOTPASSWORD",
}