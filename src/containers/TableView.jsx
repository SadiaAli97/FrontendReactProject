import * as React from 'react';
import { Header } from '../components/Header';
import { SDKListItem } from '../components/SDKListItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ISDKS } from '../constants/app-constants';
import moment from 'moment';
import '../css/tableView.css';


export function TableView({data, selectedToggleOption}) {
  const headings = {
    heading: selectedToggleOption === ISDKS ? 'Installed SDK\'s' : 'Uninstalled SDK\'s',
    subheading: 'Latest Update: ' + moment().format('MMM Do YYYY'),
    count: data?.length
  }
  let categories = []
   data.map(item => {
    const allItems = [...item.categories];
    allItems.map(i => {
      if (!categories.includes(i)) {
        categories.push(i);
      }
    })
  });
  return (
    <div className='table-outline'>
      <Header
        {...headings}
      />
      <div className='divider' />
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      {categories?.map(category => {
        return <Grid item xs={6}>
          <SDKListItem
            sdkCategory={category}
            categoryItems={data.filter(row => row.categories.includes(category))}
          />
        </Grid>
      })}
      </Grid>
    </Box>
    </div>
  );
}