import { Page } from "@playwright/test";
import { IMeetingPageBottamPanel, IMeetingPageFactory } from "../models/UI/IMeetingPage";
import { MeetingPageBottamPanel } from "../pages/MeetingPageBottamPanel.page";

export class MeetingPageFactory implements IMeetingPageFactory {
    private readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    meetingPageBottamPanel(): IMeetingPageBottamPanel {
        return new MeetingPageBottamPanel(this.page);
    }
}