const Tab = ({ label, selectedTab, onClick }) => {
    const isSelected = selectedTab === label;
  
    return (
      <div
        className={`tab ${isSelected ? 'active' : ''}`}
        onClick={() => onClick(label)}
      >
        {label}
      </div>
    );
  };

  export default Tab;