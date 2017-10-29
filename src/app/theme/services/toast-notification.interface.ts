import { SnotifyPosition } from 'ng-snotify';


export interface ToastNotificationInterface {
    title: string;
    body: string;
    timeout: number;
    position: number;
    progressBar: boolean;
    closeClick: boolean;
    newTop: boolean;
    backdrop: number;
    dockMax: number;
    pauseHover: boolean;
    maxHeight: number;
    titleMaxLength: number;
    bodyMaxLength: number;
}
