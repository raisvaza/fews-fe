import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import('./Gauge'), { ssr: false });

export default GaugeComponent;