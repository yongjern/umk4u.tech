---
title: "UMKWifi: from first prototype to v1.0.6"
description: "A complete update on how UMKWifi grew from its first prototype into a broader campus Wi-Fi auto-login extension."
date: "2026-11-12"
author: "UMK4U Team"
tags:
  - UMKWifi
  - Product update
---

UMKWifi began as a small browser extension for one repeated campus task: entering a matric number and password whenever the UMK Wi-Fi login portal appeared. Across 12 commits, the project progressed from an early prototype to the v1.0.6 release, with support for more portal variants, clearer controls, a refreshed identity, and better installation and support documentation.

The current extension uses Manifest V3 and stores credentials in the browser's local extension storage. When a supported campus portal opens, it detects the available login form, fills in the saved credentials, and can submit the form automatically.

## What changed for students

The most important improvement is broader portal support. The first builds focused on the `1.1.1.2` captive portal. Later releases added the `/webAuth/`, `/ac_portal/`, and `/homepage/` paths, followed by support for the Kemumin login system at `10.255.255.1`, including addresses that use a port such as `:8080`.

The extension now supports the login systems used around UMK Kampus Kota, Kolej Kediaman Taman Bendahara, and Kolej Kediaman Sri Kemumin. Because these portals do not all use the same HTML fields or login buttons, UMKWifi checks which portal is open before choosing how to fill and submit the form.

## More control over automatic login

UMKWifi's popup lets students save their campus account or matric number and password. Automatic login can be enabled or disabled without deleting those saved credentials.

When automatic login is enabled, the extension waits for a supported form, fills the correct fields, and makes one login attempt. The current implementation also watches briefly for portal forms that load after the page itself, which makes it more reliable on dynamically rendered login pages.

## Privacy and security

Saved credentials remain in `chrome.storage.local` inside the current browser profile. UMKWifi does not intentionally send them to a third-party service, but browser extension storage is not a dedicated password vault. Students should therefore use the extension only on a trusted personal device and avoid sharing a browser profile that contains their credentials.

Some campus portals may use HTTP rather than HTTPS. In that case, the connection itself does not receive HTTPS transport protection. This is a limitation of the portal being opened, not a protection that the extension can add.

## Release timeline

### v1.0.0 and v1.0.1

The first official release established the extension's basic settings popup and auto-fill workflow. v1.0.1 then documented and enabled the main UMK captive-portal routes for `webAuth`, `ac_portal`, and `homepage` pages.

### v1.0.2

The extension was renamed to **UMKWifi by Yong**, and the popup title was updated so pinned browser-toolbar users could identify where to enter their information. This version was also the first published GitHub release package.

### v1.0.3 to v1.0.5

v1.0.3 added automatic connection support for the Kemumin Wi-Fi system. v1.0.4 introduced the refreshed project logo, while v1.0.5 added explanatory comments to the content script to make the implementation easier to understand and maintain.

### v1.0.6

v1.0.6 updated the extension manifest and became the current release. Its GitHub release groups the v1.0.3-v1.0.6 work: Kemumin portal support, the revised icon, and the latest packaged extension. A downloadable `UMKWifi-1.0.6.zip` is available from the project's Releases page.

## Complete commit record

The following list covers every commit currently present in the repository, from oldest to newest:

1. **21 October 2026 - First commit:** created the initial UMKWifi project structure.
2. **22 October 2026 - Prototype Beta 0.1:** added password auto-detection for the `1.1.1.2/ac_portal/` login flow.
3. **22 October 2026 - v1.0.0:** marked the first official version.
4. **22 October 2026 - v1.0.1:** improved the English README, added a Chinese README, and expanded automatic filling across the `webAuth`, `ac_portal`, and `homepage` routes.
5. **22 October 2026 - v1.0.2:** renamed the extension to UMKWifi by Yong and improved the toolbar popup information.
6. **22 October 2026 - Beta release preparation:** prepared a package for beta testing.
7. **22 October 2026 - Documentation update:** revised the English and Chinese README files for the non-official build.
8. **22 October 2026 - v1.0.3:** added automatic connection support for the UMK Kemumin Wi-Fi system.
9. **26 October 2026 - v1.0.4:** replaced the project logo.
10. **26 October 2026 - v1.0.5:** added informational comments to `content.js`.
11. **26 October 2026 - v1.0.6:** updated `manifest.json` and set the current official version.
12. **8 November 2026 - Documentation updates:** revised the README, then added clearer installation and support instructions.

## Install or review the project

The latest package and source code are available in the [UMKWifi GitHub repository](https://github.com/yongjern/UMKWifi). Students installing the GitHub package should download the latest ZIP from [Releases](https://github.com/yongjern/UMKWifi/releases), extract it to a permanent folder, enable Developer mode in Chrome or Microsoft Edge, and load the folder that directly contains `manifest.json`.

UMKWifi remains an independent student-made project. It is not an official Universiti Malaysia Kelantan service.
