import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const createRoutineMachineLayer = ({ position, start, end, color }) => {

    const instance = L.Routing.control({

        waypoints: [
            start,
            end
        ],
        lineOptions: {
            styles: [
                {
                    color,
                },
            ],
        },
        position: 'topright',
        collapsible: true,
        autoRoute: true,
        useZoomParameter: true,
        language: 'ru',
        draggableWaypoints: false,
        addWaypoints: false,
    });



    return instance;
};



const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;