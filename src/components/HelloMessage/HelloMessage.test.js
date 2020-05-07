/*global expect*/
/*global debug*/

import React,{Component} from "react";
import {render} from "@testing-library/react"

import {HelloMessage} from './HelloMessage';

describe("message tests",()=>{
    it("should render given message",()=>{
        const {getByText}=render(<HelloMessage message="worldfghjd"/>)
        getByText(/world/i);
//debug();
        //expect(querByText(/world/i).toBeDefined())
    });
});