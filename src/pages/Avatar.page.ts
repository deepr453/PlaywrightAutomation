import { FrameLocator, Locator, Page } from "@playwright/test";
import { PageLoadState } from "../constants/playwright.constant";

export class AvatarPage {
    readonly page: Page;
    readonly frame: FrameLocator;
    readonly iconAvatar: Locator;
    readonly iconGate: Locator;
    readonly btnEnter: Locator;
    constructor(page: Page){
        this.page = page;
        this.frame = this.page.frameLocator("iframe[name='sandbox']");
        this.iconAvatar = this.frame.locator("div.conference-video__local-overlay div");
        this.iconGate = this.frame.locator("div#c4hr6gaj6gs95zxmohshy");
        this.btnEnter = this.page.locator("button[aria-label='Enter']");
    }

    /**
     * This method is used for dragging the avatar to gate 
     * @return {*}  {Promise<void>}
     * @memberof AvatarPage
     */
    async dragAvatarToGate(): Promise<void>{
        await this.iconAvatar.click();
        await this.iconAvatar.dragTo(this.iconGate);
        await this.page.waitForLoadState(PageLoadState.LOAD);
        await this.page.waitForSelector("div.ant-modal-content");       
    }

    /**
     * Click on enter below the avatar panel
     * @return {*}  {Promise<void>}
     * @memberof AvatarPage
     */
    async clickOnEnter(): Promise<void>{
        await this.btnEnter.click();
        await this.page.waitForLoadState(PageLoadState.LOAD);
        await this.page.waitForSelector("div.ant-modal-content");     
    }


}