import { FrameLocator, Locator, Page, expect } from "@playwright/test";
import { IMeetingPageBottamPanel } from "../models/UI/IMeetingPage";
import { PageLoadState } from "../constants/playwright.constant";

export class MeetingPageBottamPanel implements IMeetingPageBottamPanel {
    readonly page: Page;
    readonly frame: FrameLocator;
    readonly btnShowMenu: Locator;
    readonly menuShowMore: Locator;
    readonly btnOK: Locator;
    readonly btnArchitech: Locator;
    readonly btnMuteUnmute: Locator;
    readonly btnScreenShare: Locator;
    readonly btnReaction: Locator;
    readonly btnChangeLog: Locator;
    readonly btnChat: Locator;
    readonly btnShowParticipants: Locator;
    readonly btnVideo: Locator;
    readonly panelParticipant: Locator;
    readonly sidePanel: Locator;
    readonly lstEmoji: Locator;
    readonly btnCustomizeAvatar: Locator;
    readonly btnSelectAvatar: Locator;
    readonly lstAvatar: Locator;
    readonly cameraAvatar: Locator;
    readonly selectedAvatar: Locator;
    constructor(page: Page){
        this.page = page;
        this.btnShowMenu = this.page.locator("button[aria-label='Show menu']");
        this.menuShowMore = this.page.locator("div.ant-popover-inner");
        this.btnOK = this.page.locator("//button/span[text()='OK']");
        this.btnArchitech = this.page.locator("button[aria-label='Architect mode']");
        this.btnMuteUnmute = this.page.locator("button[aria-label='mute/unmute']");
        this.btnScreenShare = this.page.locator("button[aria-label='Start screensharing']");
        this.btnReaction = this.page.locator("button[aria-label='open reaction']");
        this.btnChangeLog = this.page.locator("button[aria-label='Change log']");
        this.btnChat = this.page.locator("button[aria-label='Toggle chat']");
        this.btnShowParticipants = this.page.locator("button[aria-label='Show participants list']");
        this.btnVideo = this.page.locator("button[aria-label='Turn video on']");
        this.panelParticipant = this.page.locator("#editor-view");
        this.sidePanel = this.page.locator("div.elements-sidebar");
        this.lstEmoji = this.page.locator("//div[@class='emoji-list']/button");
        this.btnCustomizeAvatar = this.page.locator("//span[text()='Customize your avatar']");
        this.btnSelectAvatar = this.page.locator("button[aria-label='Select avatar']");
        this.lstAvatar = this.page.locator("//div[@class='conference-video__mask conference-video__mask--selectable']");
        this.selectedAvatar = this.page.locator("//div[@class='avatar-image-editor']//div[@class='animated-avatar conference-video__img']");
    }

    /**
     * Select template from the list based on parameter 
     * @param {string} template
     * @return {*}  {Promise<void>}
     * @memberof MeetingPageBottamPanel
     */
    async selectTemplate(template :string):Promise<void> {
        const templateLocator = this.page.locator("//div[@class='inline-select']/div/div[text()='"+template+"']");
        let scrollY = await this.page.evaluate(() => document.body.scrollHeight)
        await this.page.mouse.wheel(0, scrollY);
        await templateLocator.hover();
        await templateLocator.click();
    }

    /**
     * Click on show menu 
     * @return {*}  {Promise<void>}
     * @memberof MeetingPageBottamPanel
     */
    async clickOnShowMenu(): Promise<void>{
        await this.btnShowMenu.click();
    }

    /**
     * Verify show more menu is displayed or not 
     * @return {*}  {Promise<void>}
     * @memberof MeetingPageBottamPanel
     */
    async verifyShowMoreMenuDisplayed(): Promise<void>{
        expect(this.menuShowMore).toBeVisible();
    }

    /**
     * Click on ok in select template alert
     * @return {*}  {Promise<void>}
     * @memberof MeetingPageBottamPanel
     */
    async clickOnOK(): Promise<void>{
        await this.btnOK.click();
    }

    async clickOnArchitectBtn(): Promise<void>{
        await this.btnArchitech.click();
    }

    async clickOnMuteUnmute(): Promise<void>{
        await this.btnMuteUnmute.click();
    }

    async clickOnTurnOnVideo(): Promise<void>{
        await this.btnVideo.click();
    }

    async clickOnShareScreen(): Promise<void>{
        await this.btnScreenShare.click();
    }

    async hoverOnReaction(): Promise<void>{
        await this.btnReaction.hover();
    }

    async clickOnChangeLog(): Promise<void>{
        await this.btnChangeLog.click();
    }

    async clickOnChat(): Promise<void>{
        await this.btnChat.click();
    }

    async clickOnShowParticipant(): Promise<void>{
        await this.btnShowParticipants.click();
    }

    async verifyShowParticipantPanelInDisplayed(): Promise<void>{
        await expect(this.panelParticipant).toBeVisible();
    }

    async verifySidePanelDisplayed():Promise<void>{
        await expect(this.sidePanel).toBeVisible()
    }

    async clickOnFirstEmoji(): Promise<void>{
        await this.lstEmoji.first().click();
        await this.page.waitForLoadState(PageLoadState.LOAD);
    }

    async clickOnCustomizeAvatar(): Promise<void>{
        await this.btnCustomizeAvatar.click();
    }

    async clickOnSelectAvatar(): Promise<void>{
        await this.btnSelectAvatar.click();
    }

    async changeAvatar(): Promise<void>{
        await this.lstAvatar.first().click();
        await this.page.waitForLoadState(PageLoadState.DOM_CONTENT_LOADED);
    }

    async verifyCameraIsAvatarSelected(): Promise<void>{
        expect(this.selectedAvatar).toBeVisible();
    }



}