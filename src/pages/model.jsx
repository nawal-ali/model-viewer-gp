import '@google/model-viewer'; // important: this must be imported once
import React, { useEffect } from 'react';
import './ModelViewer.css';

export default function Model() {
        useEffect(() => {
          const modelViewer = document.querySelector('#hotspot-camera-view-demo');
      
          const annotationClicked = (annotation) => {
            const dataset = annotation.dataset;
            modelViewer.cameraTarget = dataset.target;
            modelViewer.cameraOrbit = dataset.orbit;
            modelViewer.fieldOfView = '45deg';
          };
      
          modelViewer.querySelectorAll('button').forEach((hotspot) => {
            hotspot.addEventListener('click', () => annotationClicked(hotspot));
          });
      
          // Clean up listeners on unmount
          return () => {
            modelViewer.querySelectorAll('button').forEach((hotspot) => {
              hotspot.removeEventListener('click', () => annotationClicked(hotspot));
            });
          };
        }, []);
    return (
        <div className='model-container'>
        <model-viewer
        id="hotspot-camera-view-demo"
      src="afi.glb"
      alt="Human muscular model"
      ar
      // auto-rotate
      // camera-controls
      exposure="1"
      shadow-intensity="1"
      style={{width: "100vw", height: '100vh'}}
    >
      {[
        { label: 'upper abs',
          position: '-0.4m 2.6m 1m',
          normal: '-0.4m 2.6m 1m',
          orbit: '0deg 84.56856deg 0.0004000m',
          target: '0m 2.2m -2.5m' },
        { label: 'lower abs',
          position: '-0.4m 2.29m 1m',
          normal: '-0.3m 2.2m 1m',
          orbit: '0deg 84.56856deg 0.0004000m',
          target: '0m 1.89m -2.5m' },
        { label: 'quadriceps',
          position: '-0.6m 1.8m 1m',
          normal: '-0.6m 1.8m 1m',
          orbit: '0deg 84.74043deg 0.07104211m',
          target: '0m 1.4m -1.8m' },
        { label: 'calves',
          position: '0.6m 0.764865m -0.0749m',
          normal: '0.6m 0.764865m -0.0749m',
          orbit: '-180deg 88.17818deg 0.07090651m',
          target: '0m 0.5m 1m' },
        { label: 'hamsstrings',
          position: '0.8m 1.5m -0.0749m',
          normal: '0.8m 1.5m -0.0749m',
          orbit: '-180deg 80.83521deg 0.07090651m',
          target: '0m 1m 2m' },
        { label: 'gluts',
          position: '0.7m 1.95m -0.1749m',
          normal: '0.7m 1.95m -0.1749m',
          orbit: '-180deg 90.1798deg 0.04504082m',
          target: '0m 1.9m 2m' },
        { label: 'pectoralis major',
          position: '0m 3m 1m',
          normal: '0m 3m 1m',
          orbit: '0deg 90.56856deg 0.0004000m',
          target: '0m 3m -2.5m' },
        { label: 'forearm muscles',
          position: '-1.19m 2.6m 1m',
          normal: '-1.19m 2.6m 1m',
          orbit: '-75deg 65deg 0.06213665m',
          target: '1m 1.5m -0.5m' },
        { label: 'triceps',
          position: '-0.9m 2.9m 1m',
          normal: '-0.9m 2.9m 1m',
          orbit: '-70deg 55deg 0.06213665m',
          target: '1.7m 1m -0.8m' },
        { label: 'biceps',
          position: '0.9m 2.9m 1m',
          normal: '0.9m 2.9m 1m',
          orbit: '-18deg 100deg 1m',
          target: '1.5m 3.25m -2.5m' },
        { label: 'posterior deltoid',
          position: '-1.1m 2.95m -0.1749m',
          normal: '-1.1m 2.95m -0.1749m',
          orbit: '-138deg 55.1798deg 0.04504082m',
          target: '1.5m 0.98m 2m' },
        // { label: 'lateeral deltoid',
        //   position: '-0.1053838m 0.01610652m 0.1076345m',
        //   normal: '-0.624763m 0.5176854m 0.5845283m',
        //   orbit: '10.89188deg 119.9775deg 0.03543022m',
        //   target: '-0.1053838m 0.01610652m 0.1076345m' },
        // { label: 'anterior deltoid',
        //   position: '-0.1053838m 0.01610652m 0.1076345m',
        //   normal: '-0.624763m 0.5176854m 0.5845283m',
        //   orbit: '10.89188deg 119.9775deg 0.03543022m',
        //   target: '-0.1053838m 0.01610652m 0.1076345m' },
        // { label: 'trapezius',
        //   position: '-0.1053838m 0.01610652m 0.1076345m',
        //   normal: '-0.624763m 0.5176854m 0.5845283m',
        //   orbit: '10.89188deg 119.9775deg 0.03543022m',
        //   target: '-0.1053838m 0.01610652m 0.1076345m' },
        // { label: 'latissimus',
        //   position: '-0.1053838m 0.01610652m 0.1076345m',
        //   normal: '-0.624763m 0.5176854m 0.5845283m',
        //   orbit: '10.89188deg 119.9775deg 0.03543022m',
        //   target: '-0.1053838m 0.01610652m 0.1076345m' },
        // { label: 'obliques',
        //   position: '-0.1053838m 0.01610652m 0.1076345m',
        //   normal: '-0.624763m 0.5176854m 0.5845283m',
        //   orbit: '10.89188deg 119.9775deg 0.03543022m',
        //   target: '-0.1053838m 0.01610652m 0.1076345m' }        
      ].map((hotspot, index) => (
        <button
          key={index}
          className="view-button"
          slot={`hotspot-${index}`}
          data-position={hotspot.position}
          data-normal={hotspot.normal}
          data-orbit={hotspot.orbit}
          data-target={hotspot.target}
        >
          {hotspot.label}
        </button>
      ))}
    </model-viewer>
    </div>
  );
}