/*global jest*/
import React from 'react'
import { render,fireEvent } from '@testing-library/react';

import ProductSort from '.';

describe("Product sort Tests",()=>{
    
    it("should test selected sort",()=>{
        
      const onSelectSortBy=jest.fn()
      const { getByDisplayValue } = render(
          <ProductSort onSelectSortBy={onSelectSortBy}/>
      );
      const selectTag=getByDisplayValue("Select");
      fireEvent.change(selectTag)
      onSelectSortBy()
    })
})