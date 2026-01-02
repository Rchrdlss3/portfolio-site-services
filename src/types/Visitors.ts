/*
When they visit the website, I want to know who came, if they're a recruiter or not, and if they have a message to send to me.
*/
export type Device = {
    ip: string;
    userAgent: string;
    device: string;
    browser: string;
}
export type Visitor = {
    id: string;
    name: string;
    email: string;
    isRecruiter: boolean;
    message: string;
    device: Device;
}