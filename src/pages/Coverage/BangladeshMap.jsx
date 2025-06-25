// Test in another component
import BangladeshMap from './BangladeshMap';

const serviceCenters = [
  {
    district: 'Dhaka',
    latitude: 23.8103,
    longitude: 90.4125,
    covered_area: ['Dhanmondi', 'Gulshan', 'Banani']
  },
  {
    district: 'Chattogram',
    latitude: 22.3569,
    longitude: 91.7832,
    covered_area: ['Panchlaish', 'Agrabad']
  }
];

function CoveragePage() {
  return <BangladeshMap serviceCenters={serviceCenters} />;
}

export default CoveragePage;
