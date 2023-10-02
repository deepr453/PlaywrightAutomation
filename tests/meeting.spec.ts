import {test} from "@playwright/test"
import { LandingPageFactory } from "../src/factories/LandiingPage.factory"
import { MeetingPageFactory } from "../src/factories/MeetingPage.factory"

test.describe("Test Meeting", () => {
    let landingPage: LandingPageFactory;
    let meetingPage: MeetingPageFactory;

    test.beforeEach(async ({page}) => {
        await page.goto("/");
        landingPage = new LandingPageFactory(page);
        meetingPage = new MeetingPageFactory(page);
    })

    test("_TC001_Test Meeting", async () => {
        console.info("Step_1: Accept Cookies");
            await landingPage.landingPageMainContent().clickOnAcceptCookies();
        console.info("Step_2: Click on access your free space");
            await landingPage.landingPageMainContent().clickOnAccessYourFreeSpaceLink();
        console.info("Step_3: Click on dismiss button in grant access alert");
            await landingPage.permissionPage().clickOnDismissInGarntAccessAlert();
        console.info("Step_4: Set your name");
            await landingPage.permissionPage().setYourName("Test");
        console.info("Step_5: Click on Next");
            await landingPage.permissionPage().clickOnNext();
        console.info("Step_6: Drag avatar to gate");
            await landingPage.avatarPage().clickOnEnter();
        console.info("Step_7: select template");
            await meetingPage.meetingPageBottamPanel().selectTemplate("Empty space")
        console.info("Step_8: Click on OK"); 
            await meetingPage.meetingPageBottamPanel().clickOnOK();   
        console.info("Step_9: Click on show more button");
            await meetingPage.meetingPageBottamPanel().clickOnShowMenu();
        console.info("Expected_Result_9: Verify Show more menu is displayed");
            await meetingPage.meetingPageBottamPanel().verifyShowMoreMenuDisplayed();
        console.info("Step_10: Click on Architect icon");
            await meetingPage.meetingPageBottamPanel().clickOnArchitectBtn();
        console.info("Expected_Result_10: Verify side panel opened");
            await meetingPage.meetingPageBottamPanel().verifySidePanelDisplayed();
            await meetingPage.meetingPageBottamPanel().clickOnArchitectBtn();
        console.info("Step_11: click on mute unmute icon");
            await meetingPage.meetingPageBottamPanel().clickOnMuteUnmute();
        console.info("Step_12: Turn on video");
            await meetingPage.meetingPageBottamPanel().clickOnTurnOnVideo();
        console.info("Step_13: Click on Screen Share");
            await meetingPage.meetingPageBottamPanel().clickOnShareScreen();
        console.info("Step_14: Hover on reaction icon");
            await meetingPage.meetingPageBottamPanel().hoverOnReaction();
            await meetingPage.meetingPageBottamPanel().clickOnFirstEmoji();
        console.info("Step_15: Click on change log");
            await meetingPage.meetingPageBottamPanel().clickOnChangeLog();
        console.info("Step_16: click on toggle chat");
            await meetingPage.meetingPageBottamPanel().clickOnChat();
        console.info("Step_17: Click on show particpants");
            await meetingPage.meetingPageBottamPanel().clickOnShowParticipant();
        console.info("Expected_Result_17: Verify show participants are displayed");
            await meetingPage.meetingPageBottamPanel().verifyShowParticipantPanelInDisplayed();
    })
})