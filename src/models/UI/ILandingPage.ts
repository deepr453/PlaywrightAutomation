export interface ILandingPage {

}

export interface ILandingPageFactory {
    landingPageMainContent(): ILandingPageMainContent;
    permissionPage(): IPermissionPage;
    avatarPage(): IAvatarPage;
}

export interface ILandingPageMainContent extends ILandingPage {
    clickOnAccessYourFreeSpaceLink(): Promise<void>;
    clickOnAcceptCookies(): Promise<void>;
}

export interface IPermissionPage extends ILandingPage {
    clickOnDismissInGarntAccessAlert(): Promise<void>;
    setYourName(name: string): Promise<void>;
    clickOnNext(): Promise<void>;
}

export interface IAvatarPage extends ILandingPage {
    dragAvatarToGate(): Promise<void>;
    clickOnEnter(): Promise<void>;
}