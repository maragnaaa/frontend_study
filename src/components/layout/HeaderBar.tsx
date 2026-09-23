import '../../styles/header.css';
import { HeaderLeft } from '../ui/HeaderLeft';
import { HeaderRight } from '../ui/HeaderRight';

function HeaderBar() {
  return (
    <div className="header-bar">
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
}

export default HeaderBar;
