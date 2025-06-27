---
title: Microcopy
slug: microcopy
icon: done
order: 30
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->

Microcopy refers to the copy directly used in user interfaces to guide users and help them interact
with it. The primary aim of it is to settle communication between users and the product.

## Button labeling

Always use sentence case.

Prefer a single and clear word for the action being performed by the button (for example, **Cancel**,
**Delete** or **Save**).

Avoid using exclamations like "Ok" and "No", because they can be misleading without further
explanation.

When using icons, keep the label whenever possible, except when the action's context and/or icon
make it unmistakable.

Make sure to always use the `title` attribute.

<div class="c8y-example c8y-example-split-sm">
  <div class="row">
    <div class="col-sm-6">
      <h4 class="m-b-32 m-t-xs-40">
        <span class="label label-danger">Don't</span>
      </h4>
      <button type="button" class="btn btn-primary">Ok</button>
      <button type="button" class="btn btn-danger">No</button>
      <button type="button" class="btn btn-default">Do it</button>
      <button type="button" class="btn btn-primary">Yes</button><br><br>
      <button type="button" class="btn btn-default">Click here</button>
      <button type="button" class="btn btn-link">Learn more</button>
      <button type="button" class="btn btn-warning btn-dot">
        <i class="dlt-c8y-icon-sliders"></i>
      </button>
    </div>
    <div class="col-sm-6">
      <h4 class="m-b-32">
        <span class="label label-success"> Do </span>
      </h4>
      <button type="button" class="btn btn-default" title="Cancel">Cancel</button>
      <button type="button" class="btn btn-danger" title="Delete">Delete</button>
      <button type="button" class="btn btn-primary" title="Save">Save</button>
      <br><br>
      <button type="button" class="btn btn-primary" title="Add data point">Add data point</button>
      <button type="button" class="btn btn-link" title="Unassign">Unassign</button>
      <button type="button" class="btn btn-dot" title="Settings">
        <i class="dlt-c8y-icon-cog"></i>
      </button>
    </div>
  </div>
</div>

> ### WYLTIWLT
>
> A practical solution is to say that the words on a button must make sense after both
> the interrogative "Would you like to…?"" (where the publisher speaks) as well as the conditional "I would like to…"(where the user speaks).  
> It's the "Would you like to? / I would like to" test, or WYLTIWLT (pronounced "wilty-wilt" – a bit like WYSIWYG) for short.

## Form elements

Always provide labels.

Use the placeholders to help the user. Be helpful by providing an example of the expected input.

Append `(required)` to the placeholder on required fields.

<div class="c8y-example c8y-example-split-sm">
  <div class="row">
    <div class="col-sm-6">
      <h4 class="m-b-32 m-t-xs-40">
        <span class="label label-danger" role="alert">Don't</span>
      </h4>
      <div class="form-group">
        <label>Name </label>
        <input type="text"
          class="form-control"
          placeholder="Your name">
      </div>
      <div class="form-group">
        <label>Email </label>
        <input type="email"
          class="form-control"
          placeholder="Your email">
      </div>
    </div>
    <div class="col-sm-6">
      <h4 class="m-b-32">
        <span class="label label-success">Do</span>
      </h4>
      <div class="form-group">
        <label>Name</label>
        <input type="text"
          class="form-control"
          placeholder="For example, Jane Doe">
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email"
          class="form-control"
          placeholder="for example, email&#64;example.com (required)">
      </div>
    </div>
  </div>
</div>

## Tabs labeling

Ensure that the labels show a clear relationship between views.

Favor nouns over verbs (for example, "Data explorer", "Subassets", "Measurements").

Avoid generic labels such as "General" or "Advanced".

Make sure to use a sentence case.

Always fill in the attribute <code>title</code> with the tab label.

On page-level tabs always provide an icon prefixing the label.

<div class="c8y-example c8y-example-split-sm">
  <div class="row">
    <div class="col-sm-6">
      <h4 class="m-b-32 m-t-xs-40">
        <span class="label label-danger" role="alert">Don't</span>
      </h4>
      <div class="m-0 p-relative">
        <div horizontal="tabsHorizontal"
          class="has-tabs page-tabs-horizontal d-block">
          <div class="tabContainer ">
            <ul class="nav nav-tabs nav-tabsc8y">
              <li class=" active">
                <button title="Info" >
                  <i c8y-icon="asterisk" class="dlt-c8y-icon-asterisk"></i>
                  <span class="txt">More</span>
                </button>
              </li>
              <li>
                <button title="Subassets">
                  <i c8y-icon="folder" class="dlt-c8y-icon-folder-open"></i>
                  <span class="txt">Group subassets</span>
                </button>
              </li>
              <li>
                <button
                  title="Data explorer"
                >
                  <i c8y-icon="bar-chart" class="dlt-c8y-icon-bar-chart"></i>
                  <span class="txt">Advanced Data explorer</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <h4 class="m-b-32">
        <span class="label label-success">Do</span>
      </h4>
      <div class="m-0 p-relative">
        <div
          class="page-tabs-horizontal d-block">
          <div class="tabContainer ">
            <ul class="nav nav-tabs nav-tabsc8y">
              <li class="active">
                <button title="Info">
                  <i c8y-icon="asterisk" class="dlt-c8y-icon-asterisk"></i>
                  <span class="txt" title="Info">Info</span>
                </button>
              </li>
              <li>
                <button title="Subassets">
                  <i c8y-icon="folder" class="dlt-c8y-icon-folder-open"></i>
                  <span class="txt" title="Subassets">Subassets</span>
                </button>
              </li>
              <li>
                <button title="Data explorer">
                  <i c8y-icon="bar-chart" class="dlt-c8y-icon-bar-chart"></i>
                  <span class="txt" title="Data explorer">Data explorer</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## Action bar button labels

The action bar is a toolbar with a horizontal row of buttons or links to interact with the current view.

Use the same approach as button labeling.

If required, provide more info in the <code>title</code> attribute, for example, in "Full screen" the title attribute is `Toggle full screen`.

Always provide an icon prefixing the label.

<div class="c8y-example c8y-example-split-h-sm">
  <div class="row">
    <div class="col-sm-12 p-b-40 separator-bottom">
      <h4 class="m-b-32 m-t-xs-40">
        <span class="label label-danger" role="alert">Don't</span>
      </h4>
      <div class="c8y-ui-action-bar navbar navbar-default p-static"
        >
        <div class="navbar-collapse text-center collapse">
          <ul class="nav navbar-nav navbar-left">
              <li class="navbar-form hidden-xs" >
                <div class="form-group">
                  <div class="input-group">
                    <div class="c8y-select-wrapper">
                      <select class="form-control">
                        <option label="Auto" selected="selected">Auto</option>
                        <option label="Grid">Grid</option>
                        <option label="List">List</option>
                      </select>
                      <span></span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <button class="btn btn-link ">
                <i c8y-icon="pencil" class="dlt-c8y-icon-pencil"></i>
                Edit Information
              </button>
            </li>
            <li>
              <button class="btn btn-link">
                <i c8y-icon="expand" class="dlt-c8y-icon-expand"></i>
                Click for Full screen
              </button>
            </li>
            <li>
              <div class="dropdown">
                <button class="dropdown-toggle c8y-dropdown open">
                  <span>More…</span>
                  <i class="dlt-c8y-icon-caret-down"></i>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-sm-12 p-t-40">
      <h4 class="m-b-32">
        <span class="label label-success">Do</span>
      </h4>
      <div class="c8y-ui-action-bar horizontal-tabs navigator-open has-tabs p-static" >
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-left">
              <li class="navbar-form hidden-xs">
                <div class="form-group">
                  <label class="m-r-4">Display as</label>
                  <div class="input-group">
                    <div class="c8y-select-wrapper">
                      <select class="form-control">
                        <option label="Auto" selected="selected">Auto</option>
                        <option label="Grid">Grid</option>
                        <option label="List">List</option>
                      </select>
                      <span></span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <button title="Delete group" class="btn btn-link">
                  <i c8y-icon="trash" class="dlt-c8y-icon-trash"></i>
                  Delete group
                </button>
              </li>
              <li>
                <span>
                  <button title="Add smart rule" class="btn btn-link">
                    <i c8y-icon="plus-circle" class="dlt-c8y-icon-plus-circle"></i>
                    Add Smart Rule
                  </button>
                </span>
              </li>
              <li>
                <button title="Reload" type="button" class="btn btn-link">
                  <i c8y-icon="refresh" class="dlt-c8y-icon-refresh"></i>
                  Reload
                </button>
              </li>
            </ul>
          </div>
        </div>
    </div>
  </div>
</div>

## Prompts

It is important to use the proper level such as information, warning, danger, or success for prompts.

Provide a meaningful title for the action being prompted and make sure you write a short and clear description of what will happen, ending it with "Do you want to proceed?".

If there are checkbox options, make sure the user is aware of the context.

Always fill in the attribute `title` with proper button labels.

<div class="c8y-example c8y-example-split-sm"
  style="min-height:400px;">
  <div class="row">
    <div class="col-md-6">
      <h4 class="m-b-32 m-t-xs-40">
        <span class="label label-danger" role="alert">Don't</span>
      </h4>
      <div style="position:relative; min-height: 380px;">
        <div class="modal-backdrop fade in p-absolute"
          style="z-index: 100;"></div>
        <div class="modal d-block p-absolute"
          style="z-index: 105;">
          <div class="modal-dialog c8y-prompt modal-sm" style="max-width: 360px;">
            <div class="modal-content" >
                <div class="c8y-prompt alert alert-danger" style="height: 280px;" >
                  <h3 class="m-b-32">
                    <i c8y-icon="exclamation-circle" class="dlt-c8y-icon-exclamation-circle"></i>
                    <span ng-show="title">Ooops!</span>
                  </h3>
                  <p class="m-b-32">An error occurred.</p>
                  <div class="alert-footer">
                    <button class="btn btn-primary">Ok</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4 class="m-b-32">
        <span class="label label-success">Do</span>
      </h4>
      <div style="position:relative; min-height: 380px;">
        <div class="modal-backdrop fade in p-absolute"
          style="z-index: 100;"></div>
        <div class="modal fade in d-block p-absolute"
          style="z-index: 105;">
          <div class="modal-dialog" style="max-width: 360px;">
            <div class="c8y-prompt alert alert-danger" >
              <h3 class="m-b-32">
                <i c8y-icon="exclamation-circle" class="dlt-c8y-icon-exclamation-circle"></i>
                <span ng-show="title">Delete device</span>
              </h3>
              <p>You are about to delete device "Sensor#75". Do you want to proceed?</p>
              <div class="m-t-8">
                <label class="c8y-checkbox" title="{{ 'Delete devices' }}">
                  <input type="checkbox" />
                  <span></span>
                  <span>
                    {{ 'Also delete child devices' }}
                  </span>
                </label>
              </div>
              <div class="alert-footer">
                <button class="btn btn-default" title="Cancel">Cancel</button>
                <button class="btn btn-primary" title="Delete">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## Validation

Provide concise and direct messages. Use abbreviations when space is an issue.

<div class="c8y-example c8y-example-split-sm">
  <div class="row">
    <div class="col-sm-6">
      <h4 class="m-b-32 m-t-xs-40">
        <span class="label label-danger" role="alert">Don't</span>
      </h4>
      <form>
        <div class="form-group has-error has-feedback">
          <label for="msgId"
            class="control-label">Device ID</label>
          <input name="msgId"
            type="text"
            value="101"
            class="form-control">
          <c8y-error-feedback class="ng-isolate-scope">
            <i c8y-icon="warning"
              class="form-control-feedback dlt-c8y-icon-warning"></i>
            <small class="form-control-feedback-message ng-active">
              <span>
                <span>Maximum value allowed is 100.</span>
              </span>
            </small>
          </c8y-error-feedback>
        </div>
      </form>
    </div>
    <div class="col-sm-6">
      <h4 class="m-b-32">
        <span class="label label-success"> Do </span>
      </h4>
      <form>
        <div class="form-group has-error has-feedback">
          <label for="msgId"
            class="control-label">Device ID</label>
          <input id="msgId"
            name="msgId"
            type="text"
            value="101"
            class="form-control">
          <c8y-error-feedback class="ng-isolate-scope">
            <i c8y-icon="warning"
              class="form-control-feedback dlt-c8y-icon-warning"></i>
            <small class="form-control-feedback-message ng-active">
              <span>
                <span>Max value: 100</span>
              </span>
            </small>
          </c8y-error-feedback>
        </div>
      </form>
    </div>
  </div>
</div>

## Common terms

Below you find common terms used across the user interface:

<table class="c8y-table-responsive table-striped">
  <colgroup>
    <col width="20%">
    <col>
    <col width="30%">
  </colgroup>
  <thead class="page-sticky-header">
    <tr>
      <th class="p-l-8 p-b-8">Term</th>
      <th class="p-l-8 p-b-8">Usage</th>
      <th class="p-l-8 p-b-8">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr id="add">
      <td data-label="Term"
        class="text-primary"><h4>add</h4></td>
      <td data-label="Usage">
        <p>It's used to create a new object of specific type and add it to a list, object, and so on.</p>
        <p>Note that creating and adding are two separate steps but in the UI both terms usually refer to the process of creating and adding.</p>
        <p>Prefer "create" if there is a clear first-create-then-add mechanism. <small class="text-muted"><em>See also </em> <b>create</b>.</small></p>
      </td>
      <td data-label="Example"><em>Add group</em></td>
    </tr>
    <tr id="apply">
      <td data-label="Term"
        class="text-primary"><h4>apply</h4></td>
      <td data-label="Usage">To commit a set of changes or pending transactions made in a secondary window.</td>
      <td data-label="Example"><em>Apply configuration snapshot</em></td>
    </tr>
    <tr id="application">
      <td data-label="Term"
        class="text-primary">
        <h4>application, app</h4>
      </td>
      <td data-label="Usage">You may use app instead of application to refer to  web apps or other apps in the context of the Cumulocity platform.<br>Always use <b>application</b> with our default applications Device Management, Cockpit and Administration.</td>
      <td data-label="Example"><em>To develop new web apps</em></td>
    </tr>
    <tr id="cancel">
      <td data-label="Term"
        class="text-primary"><h4>cancel</h4></td>
      <td data-label="Usage">To halt an operation or process and return to the prior state.</td>
      <td data-label="Example"><em>Cancel all pending operations</em></td>
    </tr>
    <tr id="change">
      <td data-label="Term"
        class="text-primary"><h4>change</h4></td>
      <td data-label="Usage">Replace one existing thing with another.<br>
        <small class="text-muted"><em>See also </em> <b>edit</b>, <b>update</b>.</small></td>
      <td data-label="Example">
        <em>
          <p>Password was changed</p>
          <p>Tenant policy name changed to… </p>
        </em>
      </td>
    </tr>
    <tr id="clear">
      <td data-label="Term"
        class="text-primary"><h4>clear</h4></td>
      <td data-label="Usage">Action used to remove content from a "container" (for example, file, field) without deleting the container itself. Not to be mixed up with "delete" or "remove".<br> Do not use clear, if from a user perspective an object is deleted.<br>
        <small class="text-muted"><em>See also </em> <b>delete</b>, <b>remove</b>.</small></td>
      <td data-label="Example">
        <em>
          <p>Clear log file</p>
          <p>Clear date range</p>
        </em>
      </td>
    </tr>
    <tr id="click">
      <td data-label="Term"
        class="text-primary"><h4>click</h4></td>
      <td data-label="Usage">To position the cursor over an object and then press and release a mouse button.<br>
        <small class="text-muted"><em>See also </em> <b>press</b>.</small></td>
      <td data-label="Example">
        <em>
          <p>Click below to start</p>
        </em>
      </td>
    </tr>
    <tr id="complete">
      <td data-label="Term"
        class="text-primary"><h4>complete</h4></td>
      <td data-label="Usage">To finalize a process.<br> Do not use "finish".</td>
      <td data-label="Example">
        <em>
          <p>Could not complete the operation</p>
        </em>
      </td>
    </tr>
    <tr id="create">
      <td data-label="Term"
        class="text-primary"><h4>create</h4></td>
      <td data-label="Usage">Used to refer to the process of creating an object from scratch.<br> Often "add" is used instead since the object is usually created and added in one step.<br> Do not use "generate".<br>
        <small class="text-muted"><em>See also </em> <b>add</b>.</small>
      </td>
      <td data-label="Example">
        <em>
          <p>Application was created</p>
        </em>
      </td>
    </tr>
    <tr id="delete">
      <td data-label="Term"
        class="text-primary"><h4>delete</h4></td>
      <td data-label="Usage">To delete an object permanently and remove it from a list.<br>
        <small class="text-muted"><em>See also </em> <b>remove</b>.</small>
      </td>
      <td data-label="Example">
        <em>
          <p>User was deleted</p>
          <p>Are you sure you want to delete…</p>
        </em>
      </td>
    </tr>
    <tr>
      <td data-label="Term"
        class="text-primary"><h4>double-click</h4></td>
      <td data-label="Usage">To press and release a mouse button twice in rapid succession.<br> Mind the spelling with a hyphen.
      </td>
      <td data-label="Example">
        <em>
          <p>Double-click to add points and set the area</p>
        </em>
      </td>
    </tr>
    <tr id="duplicate">
      <td data-label="Term"
        class="text-primary"><h4>duplicate</h4></td>
      <td data-label="Usage">To create a second instance of an object to be used as a "template" for a new instance.
      </td>
      <td data-label="Example">
        <em>
          <p>Duplicate Smart rule</p>
          <p>Duplicate application</p>
        </em>
      </td>
    </tr>
    <tr id="edit">
      <td data-label="Term"
        class="text-primary"><h4>edit</h4></td>
      <td data-label="Usage">Change an existing object in an editor.<br> Do not use "modify".
        <small class="text-muted"><em>See also </em> <b>change</b>, <b>modify</b>, <b>update</b>.</small>
      </td>
      <td data-label="Example">
        <em>
          <p>Edit dashboard</p>
          <p>Click to edit</p>
          <p>Edit</p>
        </em>
      </td>
    </tr>
    <tr id="email">
      <td data-label="Term"
        class="text-primary"><h4>email</h4></td>
      <td data-label="Usage">"E-mail" and "email" are both correct ways to spell the same word.<br>In Cumulocity software and documentation use "email" without a hyphen.
      </td>
      <td data-label="Example">
        <em>
          <p>Email address</p>
          <p>Email settings</p>
          <p>Email</p>
        </em>
      </td>
    </tr>
    <tr id="enter">
      <td data-label="Term"
        class="text-primary"><h4>enter</h4></td>
      <td data-label="Usage">Typing something into a text box, and so on.
      </td>
      <td data-label="Example">
        <em>
          <p>Enter your password</p>
        </em>
      </td>
    </tr>
    <tr id="log in">
      <td data-label="Term"
        class="text-primary"><h4>log in</h4></td>
      <td data-label="Usage">Used for accessing a software.<br>
Important: <b>login</b> as a noun is spelled as one word and <b>log in</b> as a verb is spelled in two words.
        <small class="text-muted"><br><em>See also </em> <b>set up</b>.</small>
      </td>
      <td data-label="Example">
        <em>
          <p>Login screen</p>
          <p>If you log in to a system</p>
        </em>
      </td>
    </tr>
    <tr id="must">
      <td data-label="Term"
        class="text-primary"><h4>must</h4></td>
      <td data-label="Usage">Use "must" in instructions if it is mandatory to provide a value or use certain characters.<br>Do not use "should" for anything that is mandatory.<br>
        <small class="text-muted p-t-4"><em>See also </em> <b>change</b>, <b>modify</b>, <b>update</b>.</small>
      </td>
      <td data-label="Example">
        <em>
          <p>The following mandatory fields must be included</p>
          <p>Name must be unique among coils and discrete inputs</p>
        </em>
      </td>
    </tr>
    <tr id="press">
      <td data-label="Term"
        class="text-primary"><h4>press</h4></td>
      <td data-label="Usage">To press and release a keyboard key.<br>
        <small class="text-muted"><em>See also </em> <b>click</b>.</small>
      </td>
      <td data-label="Example">
        <em>
          <p>Press CTRL/CMD+C to copy</p>
        </em>
      </td>
    </tr>
    <tr>
      <td data-label="Term"
        class="text-primary"><h4>realtime/real-time/real time</h4></td>
      <td data-label="Usage">Actually, "real time" is the noun and "real-time" the adjective. <br>To avoid mixing it up, in Cumulocity software and documentation "realtime" is used for both.
      </td>
      <td data-label="Example">
        <em>
          <p>realtime</p>
        </em>
      </td>
    </tr>
    <tr id="remove">
      <td data-label="Term"
        class="text-primary"><h4>remove</h4></td>
      <td data-label="Usage">Remove an object from a list without deleting it permanently.<br>
        <small class="text-muted"><em>See also </em> <b>delete</b>.</small>
      </td>
      <td data-label="Example">
        <em>
          <p>Remove device from group</p>
        </em>
      </td>
    </tr>
    <tr id="reset">
      <td data-label="Term"
        class="text-primary"><h4>reset</h4></td>
      <td data-label="Usage">Revert values to their last saved state.<br> The previously saved state includes the value stored the last time the user clicked or triggered "Apply"." <br>
        <small class="text-muted"><em>See also </em> <b>delete</b> and <b>remove</b>.</small>
      </td>
      <td data-label="Example">
        <em>
          <p>Reset value</p>
        </em>
      </td>
    </tr>
    <tr>
      <td data-label="Term"
        class="text-primary"><h4>save</h4></td>
      <td data-label="Usage">To store data that has been provided through adding or editing objects.<br> Prefer over store in the UI.
      </td>
      <td data-label="Example">
        <em>
          <p>Inventory role saved</p>
          <p>Save to library</p>
          <p>Save</p>
        </em>
      </td>
    </tr>
    <tr>
      <td data-label="Term"
        class="text-primary"><h4>select</h4></td>
      <td data-label="Usage">To be used in the context of selecting a checkbox or selecting an entry from a dropdown list, menu of choice.<br> Do not use "check" when referring to selecting a checkbox.<br> Prefer over choose in the UI.
      </td>
      <td data-label="Example">
        <em>
          <p>Select a device type</p>
        </em>
      </td>
    </tr>
    <tr>
      <td data-label="Term"
        class="text-primary"><h4>set up</h4></td>
      <td data-label="Usage">Use for adding software to a system.<br>When using the verb set up, spell with two words.<br>Set up and install are generally interchangeable.<br> Setup as a noun is a single word.
      </td>
      <td data-label="Example">
        <em>
          <p>Set up demo</p>
          <p>Set up application</p>
        </em>
      </td>
    </tr>
    <tr>
      <td data-label="Term"
        class="text-primary"><h4>should</h4></td>
      <td data-label="Usage">Use "should" if an instruction is just a recommendation rather than referring to mandatory input.<br>
        <small class="text-muted"><em>See also </em> <b>must</b>.</small>
      </td>
      <td data-label="Example">
        <em>
          <p>Page should be reloaded to correctly display…</p>
        </em>
      </td>
    </tr>
    <tr>
      <td data-label="Term"
        class="text-primary">
        <h4>successfully</h4>
      </td>
      <td data-label="Usage">Avoid using "successfully" in messages like "Created/updated/deleted successfully" where it is usually redundant.<br> In some occasions it might be meaningful though, that is, in a bulk process which might have been completed "successfully" or with errors.
      </td>
      <td data-label="Example">
        <em>
          <p>Device connected</p>
          <p>Application deleted</p>
        </em>
      </td>
    </tr>
    <tr>
      <td data-label="Term"
        class="text-primary">
        <h4>time line</h4></td>
      <td data-label="Usage">Has to be spelled in two words.<br><small class="text-muted"><em>Do <b>not</b> use "timeline".</em></small>
      </td>
      <td data-label="Example">
        <em>
          <p>The graph shows a chronological <b>time line</b>.</p>
        </em>
      </td>
    </tr>
    <tr>
      <td data-label="Term"
        class="text-primary">
        <h4>toggle</h4></td>
      <td data-label="Usage">Graphical control element that enables the user to switch between two values.<br><br> Important: Do <b>not</b> mix up with slider. A toggle is switched on or off..
      </td>
      <td data-label="Example">
        <em>
          <p>Device connected</p>
          <p>Application deleted</p>
        </em>
      </td>
    </tr>
    <tr id="update">
      <td data-label="Term"
        class="text-primary"><h4>update</h4></td>
      <td data-label="Usage">Persist a change that has been made in the database.<br>
        <small class="text-muted"><em>See also </em> <b>edit</b>, <b>change</b>.</small>
      </td>
      <td data-label="Example">
        <em>
          <p>Global role updated</p>
        </em>
      </td>
    </tr>
    <tr>
      <td data-label="Term"
        class="text-danger"><h4>clone</h4></td>
      <td data-label="Usage">Do not use. Clone is technical and may have negative connotations.<br>
      </td>
      <td data-label="Example">
        <p>Use <b>duplicate</b> instead. </p>
      </td>
    </tr>
    <tr>
      <td data-label="Term"
        class="text-danger"><h4>finish</h4></td>
      <td data-label="Usage">Do not use<br>
      </td>
      <td data-label="Example">
        <p>Use <b>complete</b> instead. </p>
      </td>
    </tr>
    <tr>
      <td data-label="Term"
        class="text-danger"><h4>generate</h4></td>
      <td data-label="Usage">Do not use<br>
      </td>
      <td data-label="Example">
        <p>Use <b>create</b> instead. </p>
      </td>
    </tr>
    <tr>
      <td data-label="Term"
        class="text-danger"><h4>modify</h4></td>
      <td data-label="Usage">Do not use<br>
      </td>
      <td data-label="Example">
        <p>Use <b>change</b>, <b>edit</b> or <b>update</b> instead. </p>
      </td>
    </tr>
    <tr>
      <td data-label="Term"
        class="text-danger"><h4>store</h4></td>
      <td data-label="Usage">Do not use<br>
      </td>
      <td data-label="Example">
        <p>Use <b>save</b> instead. </p>
      </td>
    </tr>
  </tbody>
</table>
