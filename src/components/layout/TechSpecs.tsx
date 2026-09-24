import { Table } from '../ui/Table';
import '../../styles/techspecs.css';

function TechSpecs() {
  return (
    <div className="specs-section">
      <h1 className="specs-title">Technical Specifications</h1>
      <div className="specs-accordion">
        <h3 className="specs-text">Quick Overview & Performance Specs</h3>
        <img src="/src/assets/icons/chevron-down.svg" alt="open-specs" />
      </div>
      <Table
        tableClass="table"
        tableHeaderClass="table-header"
        headerRowContent={[
          [
            { text: 'Feature', className: 'table-header-field-1' },
            { text: 'Yoga 9i (2-in-1)', className: 'table-header-field-2' },
            { text: 'ThinkPad X1 Carbon', className: 'table-header-field-3' },
            { text: 'ThinkCentre M90q', className: 'table-header-field-4' },
          ],
        ]}
        rowsContent={[
          [
            { text: 'Processor', className: 'table-bold-text' },
            { text: 'Intel® Core™ Ultra 7', className: 'table-text' },
            { text: 'Intel® Core™ vPro® i7', className: 'table-text' },
            { text: 'Intel® Core™ i9 vPro®', className: 'table-text' },
          ],
          [
            { text: 'Battery', className: 'table-bold-text' },
            { text: '75Whr (Up to 15 hours)', className: 'table-text' },
            { text: '57Whr (Up to 13 hours)', className: 'table-text' },
            { text: '135W AC Adapter (Desktop)', className: 'table-text' },
          ],
          [
            { text: 'RAM/Storage', className: 'table-bold-text' },
            { text: '16GB LPDDR5X / 1TB SSD', className: 'table-text' },
            { text: '32GB LPDDR5X / 1TB SSD', className: 'table-text' },
            { text: '16GB DDR5 / 512GB SSD', className: 'table-text' },
          ],
          [
            { text: 'Display', className: 'table-bold-text' },
            { text: '14" 2.8K OLED PureSight Touch', className: 'table-text' },
            { text: '14" WUXGA Anti-Glare Low Blue', className: 'table-text' },
            { text: 'External Display Required', className: 'table-text' },
          ],
          [
            { text: 'Ports', className: 'table-bold-text' },
            { text: '2 x Thunderbolt™ 4, USB-A', className: 'table-text' },
            { text: '2 x Thunderbolt™ 4, 2 x USB-A, HDMI', className: 'table-text' },
            { text: '7 x USB, DisplayPort, HDMI', className: 'table-text' },
          ],
        ]}
        rowsClass={['primary-row', 'second-row', 'primary-row', 'second-row', 'primary-row']}
      />
    </div>
  );
}

export default TechSpecs;
