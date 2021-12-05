import{multiplyMatrixAndVector}from"./math.js";import{dotProduct}from"./math.js";import{calculateDeterminant}from"./math.js";import{parseMolecule}from"./molecules.js";import{parseArray}from"./molecules.js";export function genTests(e,t){var r=e+1,l=Math.pow(r,t)-1;console.log(l);let o=[];for(let e=0;e<l;e++){for(var n=e.toString(r);n.length<t;)n="0"+n;o.push(n.split(""))}return o}export function getMols(e){return e.map(e=>parseMolecule(e))}export function generateMatrix(e,t){let r=parseArray(e),l=e.map(e=>parseMolecule(e)),o=t.map(e=>parseMolecule(e)),n=l.concat(o),a=[];for(let e=0;e<Object.keys(r).length;e++){let t=[],o=Object.keys(r)[e];for(let e=0;e<n.length;e++){let r=e>=l.length?-1:1;n[e].hasOwnProperty(o)?t.push(r*n[e][o]):t.push(0)}a.push(t)}for(;a.length<a[0].length;){let e=new Array(a[0].length).fill(0);a.push(e)}return a}export function solveMatrix(e){let t=[],r=genTests(8,e.length).map(e=>e.map(e=>parseInt(e)));for(let l=0;l<r.length;l++){let o=r[l],n=multiplyMatrixAndVector(e,o),a=new Array(e.length).fill(0);if(n.join(",")==a.join(",")&&!o.includes(0)){t=o;break}}return t}