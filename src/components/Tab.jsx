const Tab = ({ label, selectedTab, onClick }) => {
    const isSelected = selectedTab === label;
  
    return (
      <button
        className={`tab ${isSelected ? 'active' : ''}`}
        onClick={() => onClick(label)}
      >
        {label}
      </button>
    );
  };

  export default Tab;