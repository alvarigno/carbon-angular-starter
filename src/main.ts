import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

import { Accordion } from "./accordion.component";
import { AccordionItem } from "./accordion-item.component";

export { Accordion } from "./accordion.component";
export { AccordionItem } from "./accordion-item.component";

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
