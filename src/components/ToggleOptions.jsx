import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export function ToggleOptions({selectedToggle, toggleChange}) {
  const [alignment, setAlignment] = React.useState('isdks');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    toggleChange(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="isdks">Installed</ToggleButton>
      <ToggleButton value="uisdks">Uninstalled</ToggleButton>
    </ToggleButtonGroup>
  );
}