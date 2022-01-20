import * as React from 'react';
import { SPACE } from '../constants/app-constants';
import moment from 'moment';
import '../css/sdklistitem.css';

export function SDKListItem({sdkCategory, categoryItems = []}) {
  return (
    <div className='list-item'>
      <div className='category'>
        {sdkCategory}
      </div>
      <div className='items'>
        {
          categoryItems.map(item => {
            return <div className='item'>
              {item.name + SPACE + moment(item.lastSeenDate, "YYYYMMDD").fromNow()}
            </div>
          })
        }
      </div>
    </div>
  );
}