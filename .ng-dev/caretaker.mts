import {CaretakerConfig} from '@angular/ng-dev';

/** The configuration for `ng-dev caretaker` commands. */
export const caretaker: CaretakerConfig = {
  g3SyncConfigPath: './.ng-dev/google-sync-config.json',
  githubQueries: [
    {
      name: 'Merge Queue',
      query: `is:pr is:open status:success label:"action: merge"`,
    },
    {
      name: 'Merge Assistance Queue',
      query: `is:pr is:open label:"action: caretaker note"`,
    },
    {
      name: 'Initial Triage Queue',
      query: `is:open no:milestone`,
    },
  ],
  caretakerGroup: 'angular-caretaker',
};
