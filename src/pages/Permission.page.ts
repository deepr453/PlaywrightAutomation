import { FrameLocator, Locator, Page } from "@playwright/test";
import { IPermissionPage } from "../models/UI/ILandingPage";

export class PermissionPage implements IPermissionPage {
    readonly page: Page; 
    readonly btnDismiss: Locator;
    readonly txtSetYourName: Locator;
    readonly btnNext: Locator;
    readonly iconAvatar: Locator;
    frame: FrameLocator;
    constructor(page: Page){
        this.page = page;
        this.btnDismiss = this.page.locator("//button/span[text()='Dismiss']");
        this.txtSetYourName = this.page.locator("div.field input");
        this.btnNext = this.page.locator("button[aria-label=' Next →']");
        this.frame = this.page.frameLocator("[name='sandbox']");
        this.iconAvatar = this.page.locator("div.conference-video__local-overlay div");
    }

    /**
     * CLick On dismiss grant access alert 
     * @return {*}  {Promise<void>}
     * @memberof PermissionPage
     */
    async clickOnDismissInGarntAccessAlert(): Promise<void>{
        await this.btnDismiss.click();
    }

    /**
     * Set your name in text box 
     * @param {string} name
     * @return {*}  {Promise<void>}
     * @memberof PermissionPage
     */
    async setYourName(name: string): Promise<void>{
        await this.txtSetYourName.clear();
        await this.txtSetYourName.type(name);
    }

    /**
     * Click On Next button 
     * @return {*}  {Promise<void>}
     * @memberof PermissionPage
     */
    async clickOnNext(): Promise<void>{
        await this.btnNext.click();
    }
}