# Desktop App Release Plan

## Overview

This spec outlines a fully automated release process for the Typyst desktop app focused on macOS DMG distribution. The goal is to create the simplest possible developer experience - just bump version and push to main, everything else happens automatically.

## Current State

### ✅ What We Have
- GitHub Actions workflow (`publish-on-release.yml`) 
- macOS builds (Intel + Apple Silicon)
- Auto-updater configuration
- Basic workflow structure

### ❌ What Needs Improvement  
- Inconsistent version numbers across files
- Missing macOS code signing setup
- Outdated GitHub Actions version
- No version management workflow
- No release preparation process

## Goals

### Primary Goals
1. **Consistent Versioning**: All version numbers stay in sync across configuration files
2. **Proper Code Signing**: macOS apps are properly signed and notarized  
3. **Automatic Release Process**: Push to main = automatic release creation and builds
4. **Quality DMG Distribution**: Professional DMG files for direct download
5. **Working Auto-updater**: Existing users get notified of new versions

### Non-Goals (Out of Scope)
- Windows support
- Automated versioning/semantic release
- Complex testing pipelines  
- Multiple distribution channels
- Advanced deployment strategies

## Implementation Plan

### Phase 1: Code Signing Setup (Week 1)

#### 1.1 Apple Developer Prerequisites
- [ ] Apple Developer account setup ($99/year)
- [ ] Generate Developer ID Application certificate
- [ ] Generate Developer ID Installer certificate (for future PKG support)
- [ ] Create app-specific password for notarization
- [ ] Get Apple Team ID from developer portal

#### 1.2 Auto-updater Signing Keys
```bash
# Generate Tauri signing keys for auto-updater
cd apps/desktop
tauri signer generate -w ~/.tauri/myapp.key
```

#### 1.3 GitHub Secrets Configuration
Set up repository secrets in GitHub:
```
APPLE_CERTIFICATE                 # Base64 encoded .p12 certificate
APPLE_CERTIFICATE_PASSWORD        # Certificate password  
APPLE_SIGNING_IDENTITY           # Certificate name (e.g. "Developer ID Application: Your Name")
APPLE_ID                         # Apple ID email
APPLE_PASSWORD                   # App-specific password
APPLE_TEAM_ID                    # 10-character team ID
TAURI_PRIVATE_KEY               # Generated private key content
TAURI_KEY_PASSWORD              # Private key password
```

### Phase 2: Workflow Modernization (Week 1)

#### 2.1 Create Automatic Release Workflow
- [ ] Create new workflow that triggers on desktop app changes to main
- [ ] Automatically detect version changes and create GitHub releases
- [ ] Upgrade `tauri-apps/tauri-action` from v0 to latest
- [ ] Add proper caching for dependencies and Rust builds
- [ ] Remove Linux builds (focusing on macOS only)
- [ ] Add notarization support

#### 2.2 Enhanced Workflow Features
- [ ] Build both Intel and Apple Silicon binaries
- [ ] Create high-quality DMG files for both architectures
- [ ] Upload DMG artifacts to GitHub release automatically
- [ ] Generate basic release notes from recent commits
- [ ] Only trigger builds when version actually changes

### Phase 3: Version Management (Week 2)

#### 3.1 Version Sync Script
Create `scripts/version.js` to:
- [ ] Update `apps/desktop/package.json`
- [ ] Update `apps/desktop/src-tauri/tauri.conf.json` 
- [ ] Update `apps/desktop/src-tauri/Cargo.toml`
- [ ] Validate all versions match before proceeding

#### 3.2 Streamlined Process
The automatic workflow handles:
- [ ] Release creation when version changes
- [ ] Changelog generation from recent commits  
- [ ] Build validation and error reporting
- [ ] DMG creation and upload

```

### Phase 4: Developer Experience (Week 2)

#### 4.1 Release Process Documentation
Create step-by-step release guide:
1. Run `node scripts/version.js patch` (or minor/major)
2. Test the build locally: `cd apps/desktop && pnpm build`
3. Commit version changes: `git add . && git commit -m "chore: bump version to vX.X.X"`
4. Push to main: `git push origin main`
5. **Everything else happens automatically**: GitHub detects version change, creates release, builds and uploads DMG files

#### 4.2 Automatic Release Features
- [ ] Auto-generated release titles (e.g., "Typyst Desktop v0.0.2")
- [ ] Auto-generated release notes from recent commits
- [ ] Automatic DMG attachment to releases

#### 4.3 Local Development Tools
- [ ] Script to test auto-updater locally
- [ ] Script to validate DMG creation
- [ ] Quick build verification script

## File Changes Required

### Configuration Files
```
apps/desktop/package.json           # Version source of truth
apps/desktop/src-tauri/tauri.conf.json  # Tauri app version
apps/desktop/src-tauri/Cargo.toml       # Rust package version
```

### New Files
```
scripts/version.js                  # Version management utility
.github/workflows/auto-release.yml  # Automatic release workflow
docs/RELEASE_PROCESS.md             # Step-by-step guide
```

## Success Metrics

### Developer Experience
- [ ] Version updates take < 30 seconds
- [ ] Full release process takes < 2 minutes of developer time
- [ ] Zero manual file editing for versions
- [ ] Zero manual GitHub UI interaction needed
- [ ] Clear documentation for release process

### Technical Quality  
- [ ] All macOS builds are properly signed and notarized
- [ ] DMG files mount and install correctly
- [ ] Auto-updater successfully detects new versions
- [ ] No version inconsistencies between files

### Process Reliability
- [ ] GitHub Actions workflow succeeds consistently  
- [ ] Release artifacts are automatically attached
- [ ] Build failures are clearly diagnosed
- [ ] Rollback process is documented

## Timeline

### Week 1: Foundation
- Set up Apple Developer account and certificates
- Configure GitHub secrets
- Update GitHub Actions workflow
- Test basic build and signing process

### Week 2: Automation & UX  
- Create version management scripts
- Write release preparation tools
- Document the complete process
- Test end-to-end release workflow

### Week 3: Polish & Validation
- Refine scripts based on testing
- Create troubleshooting documentation  
- Validate auto-updater functionality
- Prepare for first official release

## Future Considerations

### Potential Enhancements (Not Immediate)
- Windows support when needed
- App Store distribution
- Homebrew cask automation
- Advanced release notes generation
- Staged rollout capabilities

### Monitoring & Maintenance
- Monthly review of certificate expiration
- Quarterly review of GitHub Actions versions
- Annual review of signing process
- Track download metrics via GitHub API

## Risk Mitigation

### Common Issues & Solutions
- **Certificate expiration**: Calendar reminders + automated checks
- **Build failures**: Clear error messages + troubleshooting docs
- **Version mismatches**: Automated validation in scripts
- **Signing issues**: Local testing process + fallback procedures

### Rollback Strategy
- Keep previous release binaries accessible
- Document how to revert auto-updater endpoint
- Maintain release branch for hotfixes
- Clear communication process for issues 

## Final Release Workflow

### **The Complete Process (Post-Implementation)**

```bash
# 1. Update version (10 seconds)
node scripts/version.js patch

# 2. Quick build test (30 seconds)
cd apps/desktop && pnpm build

# 3. Commit and push (30 seconds)
git add .
git commit -m "chore: bump version to v0.0.2"
git push origin main

# 4. Done! 🎉 
# GitHub automatically:
# - Detects version change
# - Creates release "Typyst Desktop v0.0.2"
# - Builds Intel + Apple Silicon versions
# - Signs and notarizes both
# - Creates DMG files
# - Uploads DMGs to release
# - Updates auto-updater endpoint
```

**Total developer time**: ~70 seconds  
**Total automation time**: ~5-10 minutes  
**Result**: Fully signed DMG files ready for distribution