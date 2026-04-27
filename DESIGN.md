# DESIGN

This document is the canonical UI reference for this project. All future design and frontend decisions should follow these tokens and guidelines unless we intentionally revise this file.

## Source

- Project ID: `2758479301371544157`
- Design system: `Robotics Engineering Portfolio`
- Asset: `assets/9ad9bbc8c0574dac96b1d18c4113058c`
- Version: `1`

## Core Direction

The product visual language is based on "Digital Craftsmanship."

- The tone should feel precise, innovative, technical, and authoritative.
- The interface should blend `Glassmorphism` with `Technical Minimalist` styling.
- Surfaces should feel engineered rather than decorative.
- Components should look aligned, measured, and intentional, like part of a robotics or aerospace control interface.

## Brand Principles

- Use a dark, high-contrast foundation.
- Reserve Electric Blue accents for interaction, system energy, active states, and high-priority data.
- Prefer transparency, blur, and glow over heavy drop shadows.
- Maintain strict alignment and spacing discipline.
- Avoid soft consumer-app styling, oversized rounded pills, and generic marketing-site visuals.

## Color Tokens

### Core Palette

- `--background`: `#051424`
- `--surface`: `#051424`
- `--surface-dim`: `#051424`
- `--surface-bright`: `#2c3a4c`
- `--surface-container-lowest`: `#010f1f`
- `--surface-container-low`: `#0d1c2d`
- `--surface-container`: `#122131`
- `--surface-container-high`: `#1c2b3c`
- `--surface-container-highest`: `#273647`
- `--surface-variant`: `#273647`
- `--surface-tint`: `#00dbe9`

### Text And Structure

- `--foreground`: `#d4e4fa`
- `--on-surface`: `#d4e4fa`
- `--muted-foreground`: `#b9cacb`
- `--outline`: `#849495`
- `--outline-variant`: `#3b494b`

### Brand And Semantic

- `--primary`: `#dbfcff`
- `--primary-container`: `#00f0ff`
- `--primary-fixed`: `#7df4ff`
- `--primary-fixed-dim`: `#00dbe9`
- `--secondary`: `#bec7dc`
- `--secondary-container`: `#40495b`
- `--tertiary`: `#f5f5ff`
- `--tertiary-container`: `#d4d8ee`
- `--error`: `#ffb4ab`
- `--error-container`: `#93000a`

### Override Reference Colors

- `--accent-electric`: `#00F0FF`
- `--neutral-slate`: `#94A3B8`
- `--secondary-deep`: `#1A2333`
- `--tertiary-midnight`: `#0A0F1E`

## Typography

### Font Roles

- Headlines: `Space Grotesk`
- Labels and technical metadata: `Space Grotesk`
- Body copy: `Inter`

### Type Scale

- `h1`: `64px`, weight `700`, line-height `1.1`, letter-spacing `-0.02em`
- `h2`: `48px`, weight `600`, line-height `1.2`, letter-spacing `-0.01em`
- `h3`: `32px`, weight `500`, line-height `1.2`, letter-spacing `0`
- `body-lg`: `18px`, weight `400`, line-height `1.6`
- `body-md`: `16px`, weight `400`, line-height `1.6`
- `mono-label`: `12px`, weight `600`, line-height `1`, letter-spacing `0.1em`

### Typography Usage

- Tight tracking for major headings.
- Use tracked-out labels for specs, categories, tags, and technical metadata.
- Keep long-form content readable and neutral with `Inter`.

## Layout And Spacing

- Use a strict `12-column` fixed grid where appropriate.
- Base spacing unit: `4px`
- Allowed rhythm increments: `4, 8, 16, 24, 32, 48, 64`
- Gutter: `24px`
- Margin: `48px`
- Max content container: `1280px`
- Content should feel "docked" to the grid.

## Shape Language

- Overall shape language: `Soft-Industrial`
- Standard corner radius: `4px`
- Small radius: `2px`
- Medium radius: `6px`
- Large radius: `8px`
- Use pill/full rounding only for exceptional status treatments, not as a default
- Decorative accents may use clipped or dog-eared corners
- Border weights should generally stay at `1px` or `2px`

## Elevation And Effects

- Prefer blur, layered transparency, and illumination instead of traditional shadows.
- Container background blur should usually stay between `12px` and `20px`.
- Elevated surfaces should become slightly brighter and slightly more blue-tinted.
- Active borders may use a subtle outer bloom of `2px` to `4px`.
- Hover states should feel like the component is powering up.

## Component Guidance

### Buttons

- Rectangular with `4px` radius
- `1px` Electric Blue border
- Hover uses roughly `10%` Electric Blue fill/glow
- Optional scanning-line motion for primary emphasis

### Cards

- Glass-style surface with subtle blur
- `1px` border
- Optional corner-bracket ornament in the top-right
- Must align tightly to grid structure

### Chips And Tags

- Outline only, no solid fill by default
- Use monospaced or label-like presentation
- Best for tech stack labels such as `C++`, `ROS2`, `LiDAR`

### Inputs

- Bottom-border or subtle four-sided frame
- Focus state should create a soft glow across the field

### Data Visualization

- Thin lines
- Avoid rounded bar caps
- Use Electric Blue for primary trends and active data

### Iconography

- Prefer thin-stroke or duotone icons
- Avoid heavy filled icons
- Icons should feel skeletal, technical, and precise

## Interaction Guidance

- Hover should increase border visibility or glow rather than dramatically changing layout.
- Motion should feel functional, like scanning, calibration, or activation.
- Interactions should communicate precision, not playfulness.

## Do

- Keep layouts structured and measured.
- Use glow sparingly and intentionally.
- Let typography and spacing carry hierarchy.
- Make UI feel like an instrument panel, not a generic template.

## Avoid

- Large soft shadows
- Oversized rounded pills as a default pattern
- Bright multicolor gradients unrelated to the system palette
- Filled icons with cartoonish weight
- Loose spacing that breaks the grid rhythm
- Generic startup-site aesthetics

## Implementation Notes

- When creating CSS variables, prefer mapping directly from these tokens.
- When extending Tailwind, preserve semantic names like `background`, `surface`, `primary`, and `outline`.
- New components should justify any deviation from the `4px` spacing and radius system.
- If the design system changes, update this file first and treat that update as the source of truth.
