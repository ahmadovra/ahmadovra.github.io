# Pinch Analysis Guide

Welcome to your Pinch Analysis guide! After completing the example problem provided below, you are encouraged to explore different plots and cost functions!

## Problem Statement

ΔTmin = 20°C

| Stream | Mass Flowrate (kg/s) | Specific Heat Capacity (kJ/kg K) | Heat Capacity flowrate, CP (kW/K) | Initial (Supply) temperature (C) | Final (Target) temperature (C) | Heat Load (kW) |
|--------|---------------------|----------------------------------|----------------------------------|----------------------------------|--------------------------------|----------------|
| Cold   | 0.25                | 4                                | 1.0                              | 20                               | 200                            | +180           |
| Hot    | 0.4                 | 4.5                              | 1.8                              | 150                              | 50                             | -180           |

## Flowsheet
![Process Flowsheet](../../../che273_guide/Pinch Analysis/Pinch Analysis/Untitled.png)

> **Note:** The Heat Integration (HI) Case operation is a tool used to design heat exchanger network (HEN) and perform simulation analysis on the HEN. HI Case contains one scenario/one set of input parameters and one design/one Grid Diagram that displays one HEN.
>
> The Heat Integration (HI) Project operation is used to design a heat exchanger network (HEN). The HI Project is similar to the HI Case operation but the Project can contain multiple scenarios and designs.

## Step-by-Step Guide

### Open HI Case
![Opening HI Case](../../../che273_guide/Pinch Analysis/Pinch Analysis/hi_case.png)

### Add Hot Stream Data
Enter the inlet temperature, outlet temperature, and enthalpy.
![Hot stream data entry](../../../che273_guide/Pinch Analysis/Pinch Analysis/Untitled 1.png)

### Configure Heat Transfer Coefficient
Double click on HTC row and choose heat transfer fluid from the database.
![HTC configuration](../../../che273_guide/Pinch Analysis/Pinch Analysis/Untitled 2.png)

### Set Pinch Temperature
Open Target View to add pinch temperature.
![Target view](../../../che273_guide/Pinch Analysis/Pinch Analysis/targets_view.png)
![Pinch temperature setup](../../../che273_guide/Pinch Analysis/Pinch Analysis/Untitled 3.png)

### Define Utilities
Open Utility Streams and configure the utilities.
![Utility streams](../../../che273_guide/Pinch Analysis/Pinch Analysis/utility_streams.png)
![Utility configuration](../../../che273_guide/Pinch Analysis/Pinch Analysis/Untitled 4.png)

### Create Range Targets
Open Targets View, go to Range Targets, and create different plots by defining ranges.
![Range targets](../../../che273_guide/Pinch Analysis/Pinch Analysis/Untitled 5.png)

### Open HEN Diagram
![HEN diagram](../../../che273_guide/Pinch Analysis/Pinch Analysis/HEN_diagram.png)
![HEN diagram setup](../../../che273_guide/Pinch Analysis/Pinch Analysis/Untitled 6.png)

### View Pinch Lines
Click "Show Pinch Lines" to see above and below pinch regions.
![Pinch lines](../../../che273_guide/Pinch Analysis/Pinch Analysis/above_below_pinch.png)

### Add Heat Exchangers
Right-click to add heat exchangers and drag them to connect streams.
![Adding heat exchangers](../../../che273_guide/Pinch Analysis/Pinch Analysis/adding_hx.png)

### Configure Heat Exchangers
Double-click each heat exchanger to configure its parameters.
![Heat exchanger configuration](../../../che273_guide/Pinch Analysis/Pinch Analysis/Untitled 7.png)
![Additional configuration](../../../che273_guide/Pinch Analysis/Pinch Analysis/Untitled 8.png)
![Final configuration](../../../che273_guide/Pinch Analysis/Pinch Analysis/Untitled 9.png)

### Review Performance
Compare your results using the Targets and Performance views.
![Performance review](../../../che273_guide/Pinch Analysis/Pinch Analysis/Untitled 10.png)

#### Results
Initial calculations from Heat Integration Case:
![Initial calculations](../../../che273_guide/Pinch Analysis/Pinch Analysis/Untitled 11.png)

Your optimized design results:
![Final design results](../../../che273_guide/Pinch Analysis/Pinch Analysis/Untitled 12.png) 