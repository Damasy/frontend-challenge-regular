import { Device } from "../../models/device";
import { Breadcrumb } from "../core/Breadcrumb/types";

export interface MainPageState {
  breadcrumbs: Breadcrumb[];
  devices: Device[];
  listView: Boolean;
}