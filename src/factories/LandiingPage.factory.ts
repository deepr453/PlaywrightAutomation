import { Page } from "@playwright/test";
import { IAvatarPage, ILandingPageFactory, ILandingPageMainContent, IPermissionPage } from "../models/UI/ILandingPage";
import { LandingPageMainContent } from "../pages/LandingPageMainContent.page";
import { PermissionPage } from "../pages/Permission.page";
import { AvatarPage } from "../pages/Avatar.page";

export class LandingPageFactory implements ILandingPageFactory {
    private readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    landingPageMainContent(): ILandingPageMainContent{
        return new LandingPageMainContent(this.page);
    }

    permissionPage(): IPermissionPage {
        return new PermissionPage(this.page);
    }

    avatarPage(): IAvatarPage {
        return new AvatarPage(this.page);
    }
}