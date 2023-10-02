import { Locator, Page } from "@playwright/test";
import { ILandingPage, ILandingPageMainContent } from "../models/UI/ILandingPage";
import { PageLoadState } from "../constants/playwright.constant";

export class LandingPageMainContent implements ILandingPageMainContent{
    readonly page: Page; 
    readonly lnkAccessFreeSpace: Locator;
    readonly btnAcceptCookies: Locator;
    constructor(page: Page){
        this.page = page;
        this.lnkAccessFreeSpace = this.page.locator("//a[text()='Or access your free space']"); 
        this.btnAcceptCookies = this.page.locator("button#gdpr-accept-button");
    }

    /**
     * Click on access your free space link 
     * @return {*}  {Promise<void>}
     * @memberof LandingPageMainContent
     */
    async clickOnAccessYourFreeSpaceLink(): Promise<void> {
        await this.lnkAccessFreeSpace.click();
        await this.page.waitForLoadState(PageLoadState.LOAD);
        await this.page.waitForLoadState(PageLoadState.NETWORK_IDLE);
    }

    /**
     * Click on Accept cookies button 
     * @memberof LandingPageMainContent
     */
    async clickOnAcceptCookies(){
        await this.btnAcceptCookies.click();
        await this.page.waitForLoadState(PageLoadState.NETWORK_IDLE);
    }
}


