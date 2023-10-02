export interface IMeetingPage {

}

export interface IMeetingPageFactory {
    meetingPageBottamPanel(): IMeetingPageBottamPanel;
}

export interface IMeetingPageBottamPanel extends IMeetingPage {
    selectTemplate(template :string):Promise<void>;
    clickOnShowMenu(): Promise<void>;
    clickOnOK(): Promise<void>;
    verifyShowMoreMenuDisplayed(): Promise<void>;
    clickOnArchitectBtn(): Promise<void>;
    clickOnMuteUnmute(): Promise<void>;
    clickOnTurnOnVideo(): Promise<void>;
    clickOnShareScreen(): Promise<void>;
    hoverOnReaction(): Promise<void>;
    clickOnChangeLog(): Promise<void>;
    clickOnChat(): Promise<void>;
    clickOnShowParticipant(): Promise<void>;
    verifyShowParticipantPanelInDisplayed(): Promise<void>;
    clickOnFirstEmoji(): Promise<void>;
    verifySidePanelDisplayed():Promise<void>;
    verifyShowParticipantPanelInDisplayed(): Promise<void>;
    clickOnFirstEmoji(): Promise<void>;
    clickOnCustomizeAvatar(): Promise<void>;
    clickOnSelectAvatar(): Promise<void>;
    changeAvatar(): Promise<void>;
    verifyCameraIsAvatarSelected(): Promise<void>
}