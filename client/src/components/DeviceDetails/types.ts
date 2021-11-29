import { Device } from "../../models/device";
import { Breadcrumb } from "../core/Breadcrumb/types";

export interface DetailsPageState {
  breadcrumbs: Breadcrumb[];
  device: Device;
}