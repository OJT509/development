import { run } from "./app/app";
import "./main.scss";
import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";
const alertService = new AlertService();
const componentService = new ComponentService();
const version = require("../package.json").version;

run(alertService, componentService);
document.getElementById("version").innerHTML = "Version " + version;