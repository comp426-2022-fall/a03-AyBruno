#!/usr/bin/env node
import minimist from "minimist"
import {roll} from "../lib/roll.js"

function main(){
    const args = minimist(process.argv.slice(2)); 
    let sides = 6;
    let dice = 2;
    let rolls = 1;

    if(args.sides){
        sides = args.sides;  
    }
    if(args.dice){
        dice = args.dice;
    }
    if(args.rolls){
        rolls = args.rolls;
    }
    console.log(JSON.stringify(roll(sides,dice,rolls))); 
}
main();
