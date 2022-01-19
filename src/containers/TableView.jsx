import * as React from 'react';
import { Header } from '../components/Header';
import { SDKListItem } from '../components/SDKListItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ISDKS } from '../constants/app-constants';
import '../css/tableView.css';


export function TableView({data, selectedToggleOption}) {
  const headings = {
    heading: selectedToggleOption === ISDKS ? 'Installed SDK\'s' : 'Uninstalled SDK\'s',
    subheading: 'Latest Update:',
    count: data?.length
  }
  return (
    <div className='table-outline'>
      <Header
        {...headings}
      />
      <div className='divider' />
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      {data?.map(row => {
        return <Grid item xs={6}>
          <SDKListItem
            sdkCategory={row.categories.join(',')}
            categoryItems={[{name: row.name, date: row.lastSeenDate || ''}]}
          />
        </Grid>
      })}
      </Grid>
    </Box>
    </div>
  );
}