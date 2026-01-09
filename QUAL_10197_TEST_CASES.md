# QUAL-10197: Manual Test Cases

## Test Case Documentation for Login Functionality

This document contains detailed manual test cases for each user story. Each test case includes positive, negative, and edge case scenarios.

---

## User Story 1: Basic Login Authentication

### TC-001: Successful Login with Valid Credentials (Positive)
**Priority:** Critical  
**Test Type:** Smoke Test

**Preconditions:**
- User account exists with email: test@example.com, password: password123
- Application is accessible
- User is not logged in

**Test Steps:**
1. Navigate to application URL
2. Verify login page is displayed
3. Enter "test@example.com" in email field
4. Enter "password123" in password field
5. Click "Sign In" button

**Expected Results:**
- User is redirected to dashboard
- Dashboard displays "Welcome, Test User"
- User email "test@example.com" is visible
- No error messages are shown

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-002: Login with Invalid Email (Negative)
**Priority:** High  
**Test Type:** Functional

**Preconditions:**
- Application is accessible
- User is on login page

**Test Steps:**
1. Navigate to login page
2. Enter "nonexistent@example.com" in email field
3. Enter "password123" in password field
4. Click "Sign In" button

**Expected Results:**
- Error message appears: "No account found with this email address"
- User remains on login page
- No dashboard access is granted

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-003: Login with Wrong Password (Negative)
**Priority:** High  
**Test Type:** Security

**Preconditions:**
- User account exists with email: test@example.com
- User is on login page

**Test Steps:**
1. Navigate to login page
2. Enter "test@example.com" in email field
3. Enter "wrongpassword" in password field
4. Click "Sign In" button

**Expected Results:**
- Error message appears: "Invalid password. Please try again."
- User remains on login page
- Password field is cleared or remains filled (based on UX decision)

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-004: Login with Multiple Valid User Accounts (Positive)
**Priority:** Medium  
**Test Type:** Functional

**Preconditions:**
- Multiple user accounts exist
- User is on login page

**Test Steps:**
1. Login with admin@example.com / Admin@123
2. Verify successful login and logout
3. Login with john.doe@example.com / SecurePass123!
4. Verify successful login

**Expected Results:**
- Each account logs in successfully
- Correct user information displayed for each account
- No cross-contamination of user data

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

## User Story 2: Remember Me Functionality

### TC-005: Remember Me Checked - Session Persistence (Positive)
**Priority:** High  
**Test Type:** Functional

**Preconditions:**
- User has valid credentials
- User is on login page

**Test Steps:**
1. Navigate to login page
2. Enter valid credentials
3. Check "Remember Me" checkbox
4. Click "Sign In" button
5. Close browser completely
6. Reopen browser and navigate to application

**Expected Results:**
- User is automatically logged in
- Dashboard is displayed without login prompt
- Auth token exists in localStorage

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-006: Remember Me Unchecked - No Session Persistence (Negative)
**Priority:** High  
**Test Type:** Functional

**Preconditions:**
- User has valid credentials
- User is on login page

**Test Steps:**
1. Navigate to login page
2. Enter valid credentials
3. Ensure "Remember Me" checkbox is unchecked
4. Click "Sign In" button
5. Close browser completely
6. Reopen browser and navigate to application

**Expected Results:**
- Login page is displayed
- User must enter credentials again
- Auth token exists only in sessionStorage

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-007: Page Refresh with Remember Me (Edge Case)
**Priority:** Medium  
**Test Type:** Functional

**Preconditions:**
- User is logged in with "Remember Me" checked

**Test Steps:**
1. Login with "Remember Me" checked
2. Navigate to dashboard
3. Refresh the page (F5 or Ctrl+R)

**Expected Results:**
- User remains logged in
- Dashboard is displayed immediately
- No login prompt appears

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

## User Story 3: Password Visibility Toggle

### TC-008: Toggle Password Visibility (Positive)
**Priority:** Low  
**Test Type:** UI/UX

**Preconditions:**
- User is on login page

**Test Steps:**
1. Navigate to login page
2. Enter "password123" in password field
3. Verify password is masked (shows dots/asterisks)
4. Click eye icon/toggle button
5. Verify password is visible in plain text
6. Click eye icon/toggle button again

**Expected Results:**
- Password initially displays as masked characters
- After first click, password shows as "password123"
- After second click, password is masked again
- Password value remains unchanged throughout

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-009: Password Toggle Accessibility (Edge Case)
**Priority:** Low  
**Test Type:** Accessibility

**Preconditions:**
- User is on login page
- Screen reader is active

**Test Steps:**
1. Navigate to password field
2. Tab to toggle button
3. Verify screen reader announces button purpose
4. Click toggle button
5. Verify screen reader announces state change

**Expected Results:**
- Toggle button has aria-label "Show password" or "Hide password"
- Screen reader announces button purpose
- State change is announced to screen reader users

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

## User Story 4: Form Validation

### TC-010: Empty Form Submission (Negative)
**Priority:** High  
**Test Type:** Validation

**Preconditions:**
- User is on login page

**Test Steps:**
1. Navigate to login page
2. Leave all fields empty
3. Click "Sign In" button

**Expected Results:**
- Error message appears: "Please fill in all required fields"
- Form is not submitted
- User remains on login page

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-011: Invalid Email Format (Negative)
**Priority:** High  
**Test Type:** Validation

**Preconditions:**
- User is on login page

**Test Steps:**
1. Enter "notanemail" in email field
2. Enter "password123" in password field
3. Click "Sign In" button

**Expected Results:**
- Error message appears: "Please enter a valid email address"
- Form is not submitted
- Email field may have red border or validation indicator

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-012: Password Too Short (Negative)
**Priority:** High  
**Test Type:** Validation

**Preconditions:**
- User is on login page

**Test Steps:**
1. Enter "test@example.com" in email field
2. Enter "pass" (4 characters) in password field
3. Click "Sign In" button

**Expected Results:**
- Error message appears: "Password must be at least 8 characters long"
- Form is not submitted

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-013: Email with Whitespace (Edge Case)
**Priority:** Medium  
**Test Type:** Validation

**Preconditions:**
- User is on login page

**Test Steps:**
1. Enter "  test@example.com  " (with leading/trailing spaces) in email field
2. Enter "password123" in password field
3. Click "Sign In" button

**Expected Results:**
- Whitespace is trimmed automatically
- Login succeeds if credentials are valid
- Or validation handles whitespace gracefully

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-014: Email with Special Characters (Edge Case)
**Priority:** Medium  
**Test Type:** Validation

**Preconditions:**
- User is on login page

**Test Steps:**
1. Enter "test+special@example.com" in email field
2. Enter "password123" in password field
3. Click "Sign In" button

**Expected Results:**
- Email format is accepted as valid
- Authentication proceeds (may fail if user doesn't exist)
- No validation error for email format

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-015: Multiple @ Symbols in Email (Negative)
**Priority:** Low  
**Test Type:** Validation

**Preconditions:**
- User is on login page

**Test Steps:**
1. Enter "test@@example.com" in email field
2. Enter "password123" in password field
3. Click "Sign In" button

**Expected Results:**
- Validation error appears
- Form is not submitted
- Error message indicates invalid email format

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-016: Email Without Domain (Negative)
**Priority:** Medium  
**Test Type:** Validation

**Preconditions:**
- User is on login page

**Test Steps:**
1. Enter "test@" in email field
2. Enter "password123" in password field
3. Click "Sign In" button

**Expected Results:**
- Validation error appears
- Error message indicates invalid email format
- Form is not submitted

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-017: Very Long Email Address (Edge Case)
**Priority:** Low  
**Test Type:** Validation

**Preconditions:**
- User is on login page

**Test Steps:**
1. Enter email with 50+ characters before @ symbol
2. Enter "password123" in password field
3. Click "Sign In" button

**Expected Results:**
- Email is accepted if format is valid
- No arbitrary length restriction (unless specified)
- System handles long emails gracefully

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-018: Very Long Password (Edge Case)
**Priority:** Low  
**Test Type:** Validation

**Preconditions:**
- User is on login page

**Test Steps:**
1. Enter "test@example.com" in email field
2. Enter password with 100+ characters
3. Click "Sign In" button

**Expected Results:**
- Password is accepted (meets minimum length)
- System handles long passwords gracefully
- Authentication proceeds normally

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

## User Story 5: Logout Functionality

### TC-019: Successful Logout (Positive)
**Priority:** Critical  
**Test Type:** Smoke Test

**Preconditions:**
- User is logged in and on dashboard

**Test Steps:**
1. Login with valid credentials
2. Navigate to dashboard
3. Click "Logout" button in header

**Expected Results:**
- User is redirected to login page
- All authentication tokens are cleared
- User cannot access dashboard without re-login

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-020: Logout Clears All Session Data (Positive)
**Priority:** High  
**Test Type:** Security

**Preconditions:**
- User is logged in with "Remember Me" checked

**Test Steps:**
1. Login with "Remember Me" checked
2. Verify token in localStorage
3. Click "Logout" button
4. Check browser storage (localStorage and sessionStorage)

**Expected Results:**
- All auth tokens are removed from localStorage
- All auth tokens are removed from sessionStorage
- User email is removed from storage
- No sensitive data remains in browser storage

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-021: Access Dashboard After Logout (Negative)
**Priority:** High  
**Test Type:** Security

**Preconditions:**
- User has logged out

**Test Steps:**
1. Login and then logout
2. Manually navigate to dashboard URL
3. Or use browser back button

**Expected Results:**
- User is redirected to login page
- Dashboard content is not accessible
- Authentication is required

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

## User Story 6: Error Handling

### TC-022: Error Message Visibility (Positive)
**Priority:** High  
**Test Type:** UI/UX

**Preconditions:**
- User is on login page

**Test Steps:**
1. Enter invalid credentials
2. Click "Sign In" button
3. Observe error message

**Expected Results:**
- Error message is prominently displayed
- Error message has red background or error styling
- Error message is easily readable
- Error message has role="alert" for accessibility

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-023: Error Message Persistence (Edge Case)
**Priority:** Medium  
**Test Type:** UI/UX

**Preconditions:**
- User has triggered an error message

**Test Steps:**
1. Enter invalid credentials to trigger error
2. Modify email or password field
3. Submit form again

**Expected Results:**
- Old error message is cleared
- New error message appears if still invalid
- Or success occurs if now valid

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

## User Story 7: Forgot Password Link

### TC-024: Forgot Password Link Visibility (Positive)
**Priority:** Medium  
**Test Type:** UI/UX

**Preconditions:**
- User is on login page

**Test Steps:**
1. Navigate to login page
2. Locate "Forgot password?" link
3. Verify link styling and position

**Expected Results:**
- Link is visible near password field
- Link text is "Forgot password?"
- Link is styled as clickable (color, underline on hover)
- Link has proper cursor pointer

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-025: Forgot Password Link Accessibility (Edge Case)
**Priority:** Low  
**Test Type:** Accessibility

**Preconditions:**
- User is on login page with keyboard navigation

**Test Steps:**
1. Navigate to login page
2. Use Tab key to navigate to "Forgot password?" link
3. Press Enter key

**Expected Results:**
- Link is keyboard accessible
- Link receives focus indicator
- Link is announced by screen readers

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

## User Story 8: Sign Up Link

### TC-026: Sign Up Link Visibility (Positive)
**Priority:** Medium  
**Test Type:** UI/UX

**Preconditions:**
- User is on login page

**Test Steps:**
1. Navigate to login page
2. Scroll to bottom of login form
3. Locate sign up section

**Expected Results:**
- Text "Don't have an account?" is visible
- "Sign up" link is visible and clickable
- Link is styled appropriately
- Section is at bottom of login form

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

## User Story 9: Loading State

### TC-027: Loading State During Login (Positive)
**Priority:** Medium  
**Test Type:** UI/UX

**Preconditions:**
- User is on login page

**Test Steps:**
1. Enter valid credentials
2. Click "Sign In" button
3. Observe button and form state immediately after click

**Expected Results:**
- Button text changes to "Signing in..."
- Button is disabled during processing
- Form inputs are disabled during processing
- Loading state prevents double submission

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-028: Loading State Clears After Error (Edge Case)
**Priority:** Medium  
**Test Type:** UI/UX

**Preconditions:**
- User is on login page

**Test Steps:**
1. Enter invalid credentials
2. Click "Sign In" button
3. Wait for error message
4. Observe form state

**Expected Results:**
- Loading state appears briefly
- After error, loading state is cleared
- Form inputs are re-enabled
- User can attempt login again

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

## User Story 10: Keyboard Navigation

### TC-029: Complete Form Using Keyboard Only (Positive)
**Priority:** Medium  
**Test Type:** Accessibility

**Preconditions:**
- User is on login page
- Mouse is not used

**Test Steps:**
1. Press Tab to focus email field
2. Type email address
3. Press Tab to focus password field
4. Type password
5. Press Tab to focus "Remember Me" checkbox
6. Press Space to check checkbox
7. Press Tab to focus "Sign In" button
8. Press Enter to submit

**Expected Results:**
- All form elements are reachable via Tab key
- Tab order is logical (email → password → remember me → submit)
- Form can be completed entirely with keyboard
- Enter key submits form from any input field

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-030: Enter Key Submits Form (Positive)
**Priority:** Medium  
**Test Type:** Functional

**Preconditions:**
- User is on login page

**Test Steps:**
1. Enter valid credentials in email field
2. Enter valid credentials in password field
3. Press Enter key (without clicking submit button)

**Expected Results:**
- Form is submitted
- Login process begins
- User is redirected to dashboard on success

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-031: Focus Indicators Visible (Edge Case)
**Priority:** Low  
**Test Type:** Accessibility

**Preconditions:**
- User is on login page

**Test Steps:**
1. Use Tab key to navigate through form
2. Observe each element as it receives focus

**Expected Results:**
- Each focused element has visible focus indicator
- Focus indicator is clearly distinguishable
- Focus indicator meets WCAG contrast requirements

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

## User Story 11: Accessibility Compliance

### TC-032: Screen Reader Compatibility (Positive)
**Priority:** High  
**Test Type:** Accessibility

**Preconditions:**
- Screen reader (NVDA, JAWS, or VoiceOver) is active
- User is on login page

**Test Steps:**
1. Navigate to login page with screen reader
2. Tab through all form elements
3. Listen to screen reader announcements

**Expected Results:**
- All labels are announced correctly
- Required fields are announced as required
- Error messages are announced with role="alert"
- Form purpose is clear from announcements

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-033: ARIA Attributes Present (Positive)
**Priority:** High  
**Test Type:** Accessibility

**Preconditions:**
- User has access to browser developer tools

**Test Steps:**
1. Navigate to login page
2. Open browser developer tools
3. Inspect form elements
4. Check for ARIA attributes

**Expected Results:**
- Email input has aria-required="true"
- Password input has aria-required="true"
- Error messages have role="alert"
- Toggle button has aria-label
- Invalid fields have aria-invalid="true"

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-034: Autocomplete Attributes (Positive)
**Priority:** Medium  
**Test Type:** Security/UX

**Preconditions:**
- User is on login page

**Test Steps:**
1. Inspect email input element
2. Inspect password input element
3. Check autocomplete attributes

**Expected Results:**
- Email field has autocomplete="email"
- Password field has autocomplete="current-password"
- Browser can offer to save/autofill credentials

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

## User Story 12: Session Persistence Check

### TC-035: Auto-Login with Valid Token (Positive)
**Priority:** High  
**Test Type:** Functional

**Preconditions:**
- User previously logged in with "Remember Me"
- Valid token exists in localStorage

**Test Steps:**
1. Close browser
2. Reopen browser
3. Navigate to application URL
4. Observe behavior

**Expected Results:**
- User is automatically redirected to dashboard
- No login page is shown
- User information is displayed correctly
- Token is validated before granting access

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-036: Login Page with Expired Token (Negative)
**Priority:** High  
**Test Type:** Security

**Preconditions:**
- Expired or invalid token exists in storage

**Test Steps:**
1. Manually set invalid token in localStorage
2. Navigate to application URL
3. Observe behavior

**Expected Results:**
- User is shown login page
- Invalid token is cleared
- User must enter credentials
- No error message about expired token (optional)

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

## Security Test Cases

### TC-037: XSS Prevention in Email Field (Security)
**Priority:** Critical  
**Test Type:** Security

**Preconditions:**
- User is on login page

**Test Steps:**
1. Enter `<script>alert('xss')</script>@example.com` in email field
2. Enter any password
3. Click "Sign In" button
4. Observe behavior

**Expected Results:**
- No JavaScript alert is executed
- Input is treated as plain text
- No XSS vulnerability is exploited
- Appropriate error or validation occurs

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-038: SQL Injection Prevention (Security)
**Priority:** Critical  
**Test Type:** Security

**Preconditions:**
- User is on login page

**Test Steps:**
1. Enter `admin'--@example.com` in email field
2. Enter `' OR '1'='1` in password field
3. Click "Sign In" button

**Expected Results:**
- Authentication fails
- No SQL injection occurs
- Error message is shown
- User is not granted access

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-039: Password Not Visible in Network Requests (Security)
**Priority:** Critical  
**Test Type:** Security

**Preconditions:**
- Browser developer tools are open
- User is on login page

**Test Steps:**
1. Open Network tab in developer tools
2. Enter credentials
3. Click "Sign In" button
4. Inspect network requests

**Expected Results:**
- Password is transmitted securely (HTTPS)
- Password is not visible in URL parameters
- Request payload is encrypted or not easily readable
- No sensitive data in clear text

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

### TC-040: Case Sensitivity in Email (Edge Case)
**Priority:** Low  
**Test Type:** Functional

**Preconditions:**
- User account exists with email: test@example.com

**Test Steps:**
1. Enter "TEST@EXAMPLE.COM" in email field
2. Enter correct password
3. Click "Sign In" button

**Expected Results:**
- Behavior depends on system design:
  - Option A: Email is case-insensitive, login succeeds
  - Option B: Email is case-sensitive, login fails
- Behavior is consistent and documented

**Actual Results:** [To be filled during testing]  
**Status:** [Pass/Fail]  
**Notes:**

---

## Summary

**Total Test Cases:** 40  
**Critical Priority:** 8  
**High Priority:** 15  
**Medium Priority:** 12  
**Low Priority:** 5

**Test Coverage:**
- Positive Test Cases: 15
- Negative Test Cases: 15
- Edge Cases: 10
- Security Test Cases: 4
- Accessibility Test Cases: 6

**Smoke Tests:** 4 (TC-001, TC-005, TC-019, TC-037)

---

## Test Execution Notes

**Environment Requirements:**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Screen reader software for accessibility tests
- Browser developer tools for security tests
- Network inspection tools

**Test Data:**
- Valid User 1: test@example.com / password123
- Valid User 2: admin@example.com / Admin@123
- Valid User 3: john.doe@example.com / SecurePass123!

**Execution Order:**
1. Run smoke tests first (TC-001, TC-005, TC-019)
2. Run critical security tests (TC-037, TC-038, TC-039)
3. Run remaining functional tests
4. Run accessibility tests
5. Run edge case tests

**Defect Reporting:**
- Include test case ID
- Provide screenshots/videos
- Note browser and OS version
- Include console errors if applicable
