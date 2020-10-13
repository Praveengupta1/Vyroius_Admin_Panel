import Ecosystem from "views/Ecosystems";
import Drone from "views/Drone.js";
import Hubs from "views/Hubs";
import Station from "views/Stations.js";
import Users from "views/User";
import Battery from "views/Battery";
import Payload from "views/Payload";
import Sensor from "views/Sensor";
import Request from "views/Request"


var dashRoutes = [
  {
    path: "/admin/users",
    name: "User List",
    icon: "design_app",
    component: Users,
    layout: "/admin",
  },
  {
    path: "/admin/ecosystems",
    name: "Ecosystem",
    icon: "design_app",
    component: Ecosystem,
    layout: "/admin",
  },
  {
    path: "/admin/hubs",
    name: "Hubs",
    icon: "design_image",
    component: Hubs,
    layout: "/admin",
  },
  {
    path: "/admin/stations",
    name: "Station",
    icon: "location_map-big",
    component: Station,
    layout: "/admin",
  },
  {
    path: "/admin/drones",
    name: "Drone",
    icon: "ui-1_bell-53",
    component: Drone,
    layout: "/admin",
  },
  {
    path: "/admin/battery",
    name: "Battery",
    icon: "design_app",
    component: Battery,
    layout: "/admin",
  },
  {
    path: "/admin/Payload",
    name: "Payload",
    icon: "ui-1_bell-53",
    component: Payload,
    layout: "/admin",
  },
  {
    path: "/admin/Sensor",
    name: "Sensor",
    icon: "design_app",
    component: Sensor,
    layout: "/admin",
  },
  {
    path: "/admin/organization",
    name: "Organization",
    icon: "design_app",
    component: Request,
    layout: "/admin",
  },
];
export default dashRoutes;
