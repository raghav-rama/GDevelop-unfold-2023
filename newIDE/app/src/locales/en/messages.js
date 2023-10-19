/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function(n, ord) {
      var s = String(n).split('.'),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
      if (ord)
        return n10 == 1 && n100 != 11
          ? 'one'
          : n10 == 2 && n100 != 12
          ? 'two'
          : n10 == 3 && n100 != 13
          ? 'few'
          : 'other';
      return n == 1 && v0 ? 'one' : 'other';
    },
  },
  messages: {
    '"{0}" will be the new build of this game published on gd.games. Continue?': function(
      a
    ) {
      return [
        '"',
        a('0'),
        '" will be the new build of this game published on gd.games. Continue?',
      ];
    },
    '"{0}" will be unpublished on gd.games. Continue?': function(a) {
      return ['"', a('0'), '" will be unpublished on gd.games. Continue?'];
    },
    '## Congratulations! \uD83C\uDF89': '## Congratulations! \uD83C\uDF89',
    '### Want to skip the basics?': '### Want to skip the basics?',
    '### You\u2019ve built your first game! \uD83D\uDE0A':
      '### You\u2019ve built your first game! \uD83D\uDE0A',
    '% of parent': '% of parent',
    '% of total': '% of total',
    '(Events)': '(Events)',
    '(Extension)': '(Extension)',
    '(auto)': '(auto)',
    '(deleted)': '(deleted)',
    '(or paste actions)': '(or paste actions)',
    '(or paste conditions)': '(or paste conditions)',
    '(yet!)': '(yet!)',
    '* (multiply by)': '* (multiply by)',
    '**Events** are made of a condition and an action: {0}{1}Condition: "**If** $(firstObject) touches the $(secondObject)..." {2}{3}Action: "... **then** the $(secondObject) disappears" {4}{5}**Click "Add condition**"': function(
      a
    ) {
      return [
        '**Events** are made of a condition and an action: ',
        a('0'),
        a('1'),
        'Condition: "**If** $(firstObject) touches the $(secondObject)..." ',
        a('2'),
        a('3'),
        'Action: "... **then** the $(secondObject) disappears" ',
        a('4'),
        a('5'),
        '**Click "Add condition**"',
      ];
    },
    '+ (add)': '+ (add)',
    '+ {0} tag(s)': function(a) {
      return ['+ ', a('0'), ' tag(s)'];
    },
    ', objects /*{parameterObjects}*/': function(a) {
      return [', objects /*', a('parameterObjects'), '*/'];
    },
    '- (subtract)': '- (subtract)',
    '/ (divide by)': '/ (divide by)',
    '/* Click here to choose objects to pass to JavaScript */':
      '/* Click here to choose objects to pass to JavaScript */',
    '0,date': '0,date',
    '0,date,date0': '0,date,date0',
    '0,number,number0': '0,number,number0',
    '1 child': '1 child',
    '1 minute': '1 minute',
    '1 person': '1 person',
    '10 cloud projects with 50MB of resources per project and 2-days version history.':
      '10 cloud projects with 50MB of resources per project and 2-days version history.',
    '10 packagings per day for Android and for desktop.':
      '10 packagings per day for Android and for desktop.',
    '10 to 19 people': '10 to 19 people',
    '100 cloud projects with 500MB of resources per project and one-year version history.':
      '100 cloud projects with 500MB of resources per project and one-year version history.',
    '100 packagings per day for Android and for desktop.':
      '100 packagings per day for Android and for desktop.',
    '100 to 299 people': '100 to 299 people',
    '1st secondary editor': '1st secondary editor',
    '2 packagings per day for Android and for desktop.':
      '2 packagings per day for Android and for desktop.',
    '2 to 4 people': '2 to 4 people',
    '20 to 99 people': '20 to 99 people',
    '2D effects': '2D effects',
    '2nd secondary editor': '2nd secondary editor',
    '3 leaderboards per game and 10 player feedback responses per game.':
      '3 leaderboards per game and 10 player feedback responses per game.',
    '3-part tutorial to creating and publishing a game from scratch.':
      '3-part tutorial to creating and publishing a game from scratch.',
    '300 people or more': '300 people or more',
    '3D effects': '3D effects',
    '3D model': '3D model',
    '3D model resource': '3D model resource',
    '3D settings': '3D settings',
    '3rd secondary editor': '3rd secondary editor',
    '5 to 9 people': '5 to 9 people',
    '50 cloud projects with 250MB of resources per project and 3-month version history.':
      '50 cloud projects with 250MB of resources per project and 3-month version history.',
    '500 cloud projects with 5GB of resources per project.':
      '500 cloud projects with 5GB of resources per project.',
    '70 packagings per day for Android and for desktop.':
      '70 packagings per day for Android and for desktop.',
    '< (less than)': '< (less than)',
    '<0>For every child in<1><2/>{0}</1>, store the child in variable<3><4/>{1}</3>, the child name in<5><6/>{2}</5>and do:</0>': function(
      a
    ) {
      return [
        '<0>For every child in<1><2/>',
        a('0'),
        '</1>, store the child in variable<3><4/>',
        a('1'),
        '</3>, the child name in<5><6/>',
        a('2'),
        '</5>and do:</0>',
      ];
    },
    '<Create a New Extension>': '<Create a New Extension>',
    '<Enter comment>': '<Enter comment>',
    '<Enter group name>': '<Enter group name>',
    '<Enter the name of external events>':
      '<Enter the name of external events>',
    '<Select a variable>': '<Select a variable>',
    '<Select a variable> (optional)': '<Select a variable> (optional)',
    '= (equal to)': '= (equal to)',
    '= (set to)': '= (set to)',
    '> (greater than)': '> (greater than)',
    'A bar that represents a resource in the game (health, mana, ammo, etc).':
      'A bar that represents a resource in the game (health, mana, ammo, etc).',
    'A condition that can be used in other events sheet. You can define the condition parameters: objects, texts, numbers, layers, etc...':
      'A condition that can be used in other events sheet. You can define the condition parameters: objects, texts, numbers, layers, etc...',
    'A condition that can be used on objects with the behavior. You can define the condition parameters: objects, texts, numbers, layers, etc...':
      'A condition that can be used on objects with the behavior. You can define the condition parameters: objects, texts, numbers, layers, etc...',
    'A condition that can be used on the object. You can define the condition parameters: objects, texts, numbers, layers, etc...':
      'A condition that can be used on the object. You can define the condition parameters: objects, texts, numbers, layers, etc...',
    'A functioning save has been found!': 'A functioning save has been found!',
    'A game with this ID already exists and you are not the owner.':
      'A game with this ID already exists and you are not the owner.',
    'A global object with this name already exists. Please change the object name before setting it as a global object':
      'A global object with this name already exists. Please change the object name before setting it as a global object',
    'A lighting layer was created. Lights will be placed on it automatically. You can change the ambient light color in the properties of this layer':
      'A lighting layer was created. Lights will be placed on it automatically. You can change the ambient light color in the properties of this layer',
    'A link or file will be created but the game will not be registered.':
      'A link or file will be created but the game will not be registered.',
    'A new physics engine (Physics Engine 2.0) is now available. You should prefer using it for new game. For existing games, note that the two behaviors are not compatible, so you should only use one of them with your objects.':
      'A new physics engine (Physics Engine 2.0) is now available. You should prefer using it for new game. For existing games, note that the two behaviors are not compatible, so you should only use one of them with your objects.',
    'A new private link will be created without replacing the version published on gd.games. You will then be able to share it like this or push it live!':
      'A new private link will be created without replacing the version published on gd.games. You will then be able to share it like this or push it live!',
    'A new private link will be created. You will then be able to share it like this or decide to promote it on gd.games.':
      'A new private link will be created. You will then be able to share it like this or decide to promote it on gd.games.',
    'A new project will be opened, so before beginning please ensure you have closed and saved your current project.':
      'A new project will be opened, so before beginning please ensure you have closed and saved your current project.',
    'A new secure window will open to complete the purchase.':
      'A new secure window will open to complete the purchase.',
    'A scale under 1 on a Bitmap text object can downgrade the quality text, prefer to remake a bitmap font smaller in the external bmFont editor.':
      'A scale under 1 on a Bitmap text object can downgrade the quality text, prefer to remake a bitmap font smaller in the external bmFont editor.',
    'A temporary image to help you visualize the shape/polygon':
      'A temporary image to help you visualize the shape/polygon',
    'A toggle switch that users can click or touch.':
      'A toggle switch that users can click or touch.',
    'AI prompt': 'AI prompt',
    'APK (for testing on device or sharing outside Google Play)':
      'APK (for testing on device or sharing outside Google Play)',
    Abandon: 'Abandon',
    'About GDevelop': 'About GDevelop',
    Accept: 'Accept',
    'Access public profile': 'Access public profile',
    Action: 'Action',
    'Action with operator': 'Action with operator',
    Actions: 'Actions',
    'Adapt automatically': 'Adapt automatically',
    'Adapt collision mask?': 'Adapt collision mask?',
    Add: 'Add',
    'Add 1 guest user or unlimited startup team members to collaborate on every project.':
      'Add 1 guest user or unlimited startup team members to collaborate on every project.',
    'Add Comment': 'Add Comment',
    'Add Joystick controls': 'Add Joystick controls',
    'Add New Event Below': 'Add New Event Below',
    'Add Sub Event': 'Add Sub Event',
    'Add a 2D effect': 'Add a 2D effect',
    'Add a 3D Box': 'Add a 3D Box',
    'Add a 3D box': 'Add a 3D box',
    'Add a 3D effect': 'Add a 3D effect',
    'Add a 3D object': 'Add a 3D object',
    'Add a Long Description': 'Add a Long Description',
    'Add a New Extension': 'Add a New Extension',
    'Add a background with parallax effect':
      'Add a background with parallax effect',
    'Add a behavior': 'Add a behavior',
    'Add a comment': 'Add a comment',
    'Add a joystick prefab': 'Add a joystick prefab',
    'Add a layer': 'Add a layer',
    'Add a link to your donation page. It will be displayed on your gd.games profile and game pages.':
      'Add a link to your donation page. It will be displayed on your gd.games profile and game pages.',
    'Add a new behavior': 'Add a new behavior',
    'Add a new behavior to the object': 'Add a new behavior to the object',
    'Add a new empty event': 'Add a new empty event',
    'Add a new event': 'Add a new event',
    'Add a new external layout': 'Add a new external layout',
    'Add a new function': 'Add a new function',
    'Add a new group': 'Add a new group',
    'Add a new group...': 'Add a new group...',
    'Add a new layer': 'Add a new layer',
    'Add a new object': 'Add a new object',
    'Add a new object...': 'Add a new object...',
    'Add a new option': 'Add a new option',
    'Add a new scene': 'Add a new scene',
    'Add a parameter': 'Add a parameter',
    'Add a parameter below': 'Add a parameter below',
    'Add a point': 'Add a point',
    'Add a property': 'Add a property',
    'Add a sprite': 'Add a sprite',
    'Add a sub-condition': 'Add a sub-condition',
    'Add a sub-event to the selected event':
      'Add a sub-event to the selected event',
    'Add a variable': 'Add a variable',
    'Add a vertex': 'Add a vertex',
    'Add action': 'Add action',
    'Add again': 'Add again',
    'Add all assets to my scene': 'Add all assets to my scene',
    'Add an animation': 'Add an animation',
    'Add an event': 'Add an event',
    'Add an extension': 'Add an extension',
    'Add asset': 'Add asset',
    'Add assets from this pack to the project':
      'Add assets from this pack to the project',
    'Add child': 'Add child',
    'Add collaborator': 'Add collaborator',
    'Add collision mask': 'Add collision mask',
    'Add condition': 'Add condition',
    'Add external events': 'Add external events',
    'Add external layout': 'Add external layout',
    'Add instance to the scene': 'Add instance to the scene',
    'Add leaderboards to your online Game':
      'Add leaderboards to your online Game',
    'Add lighting layer': 'Add lighting layer',
    'Add new external events': 'Add new external events',
    'Add or edit variables...': 'Add or edit variables...',
    'Add personality to your game and publish it online.':
      'Add personality to your game and publish it online.',
    'Add player logins to your game and add a leaderboard.':
      'Add player logins to your game and add a leaderboard.',
    'Add scene': 'Add scene',
    'Add score multiplier': 'Add score multiplier',
    'Add the "Top down movement" **behavior**.':
      'Add the "Top down movement" **behavior**.',
    'Add the assets': 'Add the assets',
    'Add these assets to the project': 'Add these assets to the project',
    'Add this asset to the project': 'Add this asset to the project',
    'Add this asset to your project.': 'Add this asset to your project.',
    'Add to the scene': 'Add to the scene',
    'Add variable': 'Add variable',
    'Add your first animation': 'Add your first animation',
    'Add your first behavior': 'Add your first behavior',
    'Add your first characters to the scene and throw your first objects.':
      'Add your first characters to the scene and throw your first objects.',
    'Add your first effect': 'Add your first effect',
    'Add your first event': 'Add your first event',
    'Add your first global variable': 'Add your first global variable',
    'Add your first instance variable': 'Add your first instance variable',
    'Add your first object variable': 'Add your first object variable',
    'Add your first property': 'Add your first property',
    'Add your first scene variable': 'Add your first scene variable',
    'Add {0}': function(a) {
      return ['Add ', a('0')];
    },
    'Add...': 'Add...',
    'Add/edit tags...': 'Add/edit tags...',
    'Add/update {0} tag(s)': function(a) {
      return ['Add/update ', a('0'), ' tag(s)'];
    },
    'Adding...': 'Adding...',
    'Additive rendering': 'Additive rendering',
    Ads: 'Ads',
    Advanced: 'Advanced',
    'Advanced File options': 'Advanced File options',
    'Advanced course': 'Advanced course',
    'Advanced options': 'Advanced options',
    'Advanced usage for manual packaging':
      'Advanced usage for manual packaging',
    Adventure: 'Adventure',
    'Align text on the center': 'Align text on the center',
    'Align text on the left': 'Align text on the left',
    'Align text on the right': 'Align text on the right',
    All: 'All',
    'All asset packs': 'All asset packs',
    'All assets': 'All assets',
    'All behaviors being directly referenced in the events:':
      'All behaviors being directly referenced in the events:',
    'All builds': 'All builds',
    'All categories': 'All categories',
    "All current entries will be deleted, are you sure you want to reset this leaderboard? This can't be undone.":
      "All current entries will be deleted, are you sure you want to reset this leaderboard? This can't be undone.",
    'All entries': 'All entries',
    'All entries are displayed.': 'All entries are displayed.',
    'All game templates': 'All game templates',
    'All objects potentially used in events: {0}': function(a) {
      return ['All objects potentially used in events: ', a('0')];
    },
    'All your changes will be lost. Are you sure you want to cancel?':
      'All your changes will be lost. Are you sure you want to cancel?',
    'Allow players to authenticate in-game':
      'Allow players to authenticate in-game',
    'Allow to display advertisements on the game page on gd.games.':
      'Allow to display advertisements on the game page on gd.games.',
    'Allow unauthenticated player usernames':
      'Allow unauthenticated player usernames',
    'Almost done...': 'Almost done...',
    'Already a member?': 'Already a member?',
    'Already added': 'Already added',
    'Already cancelled - will expire in the future':
      'Already cancelled - will expire in the future',
    'Already in project': 'Already in project',
    'Already installed': 'Already installed',
    Always: 'Always',
    'Always display the preview window on top of the editor':
      'Always display the preview window on top of the editor',
    'Ambient light color': 'Ambient light color',
    'An action that can be used in other events sheet. You can define the action parameters: objects, texts, numbers, layers, etc...':
      'An action that can be used in other events sheet. You can define the action parameters: objects, texts, numbers, layers, etc...',
    'An action that can be used on objects with the behavior. You can define the action parameters: objects, texts, numbers, layers, etc...':
      'An action that can be used on objects with the behavior. You can define the action parameters: objects, texts, numbers, layers, etc...',
    'An action that can be used on the object. You can define the action parameters: objects, texts, numbers, layers, etc...':
      'An action that can be used on the object. You can define the action parameters: objects, texts, numbers, layers, etc...',
    'An error happened': 'An error happened',
    'An error happened while checking if your purchase was successful. If you have completed the payment, close and re-open the store to see your asset pack!':
      'An error happened while checking if your purchase was successful. If you have completed the payment, close and re-open the store to see your asset pack!',
    'An error happened while checking if your purchase was successful. If you have completed the payment, close and re-open the store to see your game template!':
      'An error happened while checking if your purchase was successful. If you have completed the payment, close and re-open the store to see your game template!',
    'An error happened while loading this extension. Please check that it is a proper extension file and compatible with this version of GDevelop':
      'An error happened while loading this extension. Please check that it is a proper extension file and compatible with this version of GDevelop',
    'An error happened while registering the game. Verify your internet connection or retry later.':
      'An error happened while registering the game. Verify your internet connection or retry later.',
    'An error happened while removing the collaborator. Verify your internet connection or retry later.':
      'An error happened while removing the collaborator. Verify your internet connection or retry later.',
    "An error has occurred during functions generation. If GDevelop is installed, verify that nothing is preventing GDevelop from writing on disk. If you're running GDevelop online, verify your internet connection and refresh functions from the Project Manager.":
      "An error has occurred during functions generation. If GDevelop is installed, verify that nothing is preventing GDevelop from writing on disk. If you're running GDevelop online, verify your internet connection and refresh functions from the Project Manager.",
    'An error has occurred in functions. Click to reload them.':
      'An error has occurred in functions. Click to reload them.',
    'An error occurred when creating a new leaderboard, please close the dialog, come back and try again.':
      'An error occurred when creating a new leaderboard, please close the dialog, come back and try again.',
    'An error occurred when deleting the entry, please try again.':
      'An error occurred when deleting the entry, please try again.',
    'An error occurred when deleting the leaderboard, please close the dialog, come back and try again.':
      'An error occurred when deleting the leaderboard, please close the dialog, come back and try again.',
    'An error occurred when downloading the tutorials.':
      'An error occurred when downloading the tutorials.',
    'An error occurred when fetching the entries of the leaderboard, please try again.':
      'An error occurred when fetching the entries of the leaderboard, please try again.',
    'An error occurred when fetching the leaderboards, please close the dialog and reopen it.':
      'An error occurred when fetching the leaderboards, please close the dialog and reopen it.',
    'An error occurred when fetching the store content. Please try again later.':
      'An error occurred when fetching the store content. Please try again later.',
    'An error occurred when opening or saving the project. Try again later or choose another location to save the project to.':
      'An error occurred when opening or saving the project. Try again later or choose another location to save the project to.',
    'An error occurred when opening the project. Check that your internet connection is working and that your browser allows the use of cookies.':
      'An error occurred when opening the project. Check that your internet connection is working and that your browser allows the use of cookies.',
    'An error occurred when resetting the leaderboard, please close the dialog, come back and try again.':
      'An error occurred when resetting the leaderboard, please close the dialog, come back and try again.',
    'An error occurred when retrieving leaderboards, please try again later.':
      'An error occurred when retrieving leaderboards, please try again later.',
    'An error occurred when saving the project, please verify your internet connection or try again later.':
      'An error occurred when saving the project, please verify your internet connection or try again later.',
    'An error occurred when saving the project. Please try again by choosing another location.':
      'An error occurred when saving the project. Please try again by choosing another location.',
    'An error occurred when saving the project. Please try again later.':
      'An error occurred when saving the project. Please try again later.',
    'An error occurred when setting the leaderboard as default, please close the dialog, come back and try again.':
      'An error occurred when setting the leaderboard as default, please close the dialog, come back and try again.',
    'An error occurred when updating the appearance of the leaderboard, please close the dialog, come back and try again.':
      'An error occurred when updating the appearance of the leaderboard, please close the dialog, come back and try again.',
    'An error occurred when updating the display choice of the leaderboard, please close the dialog, come back and try again.':
      'An error occurred when updating the display choice of the leaderboard, please close the dialog, come back and try again.',
    'An error occurred when updating the handling of player names of the leaderboard, please close the dialog, come back and try again.':
      'An error occurred when updating the handling of player names of the leaderboard, please close the dialog, come back and try again.',
    'An error occurred when updating the name of the leaderboard, please close the dialog, come back and try again.':
      'An error occurred when updating the name of the leaderboard, please close the dialog, come back and try again.',
    'An error occurred when updating the sort direction of the leaderboard, please close the dialog, come back and try again.':
      'An error occurred when updating the sort direction of the leaderboard, please close the dialog, come back and try again.',
    'An error occurred when updating the visibility of the leaderboard, please close the dialog, come back and try again.':
      'An error occurred when updating the visibility of the leaderboard, please close the dialog, come back and try again.',
    'An error occurred while creating the group. Please try again later.':
      'An error occurred while creating the group. Please try again later.',
    'An error occurred while generating the game url with the currently set game slug.':
      'An error occurred while generating the game url with the currently set game slug.',
    'An error occurred while renaming the group name. Please try again later.':
      'An error occurred while renaming the group name. Please try again later.',
    'An error occurred while retrieving feedbacks for this game.':
      'An error occurred while retrieving feedbacks for this game.',
    'An error occurred while searching for a result. Please try again later.':
      'An error occurred while searching for a result. Please try again later.',
    'An error occurred while trying to recover your project last versions. Please try again later.':
      'An error occurred while trying to recover your project last versions. Please try again later.',
    'An error occurred, please try again later.':
      'An error occurred, please try again later.',
    'An expression that can be used in formulas. Can either return a number or a string, and take some parameters.':
      'An expression that can be used in formulas. Can either return a number or a string, and take some parameters.',
    'An expression that can be used on objects with the behavior. Can either return a number or a string, and take some parameters.':
      'An expression that can be used on objects with the behavior. Can either return a number or a string, and take some parameters.',
    'An expression that can be used on the object. Can either return a number or a string, and take some parameters.':
      'An expression that can be used on the object. Can either return a number or a string, and take some parameters.',
    'An extension with this name already exists in the project. Importing this extension will replace it: are you sure you want to continue?':
      'An extension with this name already exists in the project. Importing this extension will replace it: are you sure you want to continue?',
    'An external editor is opened.': 'An external editor is opened.',
    "An internet connection is required to administrate your game's leaderboards.":
      "An internet connection is required to administrate your game's leaderboards.",
    'An unexpected error happened. Verify your internet connection or try again later.':
      'An unexpected error happened. Verify your internet connection or try again later.',
    'An update is installing.': 'An update is installing.',
    'An update is ready to be installed. Close ALL GDevelop apps or tabs in your browser, then open it again.':
      'An update is ready to be installed. Close ALL GDevelop apps or tabs in your browser, then open it again.',
    Analytics: 'Analytics',
    'Analyze Objects Used in this Event': 'Analyze Objects Used in this Event',
    'And others...': 'And others...',
    'And {remainingResultsCount} more results.': function(a) {
      return ['And ', a('remainingResultsCount'), ' more results.'];
    },
    'Android (& iOS coming soon)': 'Android (& iOS coming soon)',
    'Android App Bundle (for publishing on Google Play)':
      'Android App Bundle (for publishing on Google Play)',
    'Android Build': 'Android Build',
    'Android and iOS (App stores)': 'Android and iOS (App stores)',
    'Android icons and Android 12+ splashscreen':
      'Android icons and Android 12+ splashscreen',
    'Android only': 'Android only',
    Angle: 'Angle',
    Animation: 'Animation',
    'Animation #{animationIndex}': function(a) {
      return ['Animation #', a('animationIndex')];
    },
    'Animation #{i} {0}': function(a) {
      return ['Animation #', a('i'), ' ', a('0')];
    },
    'Animations are a sequence of images.':
      'Animations are a sequence of images.',
    'Another personal website, newgrounds.com page, etc.':
      'Another personal website, newgrounds.com page, etc.',
    'Anti-aliasing': 'Anti-aliasing',
    'Antialising for 3D': 'Antialising for 3D',
    'Any additional properties will appear here if you add behaviors to objects, like Physics behavior.':
      'Any additional properties will appear here if you add behaviors to objects, like Physics behavior.',
    'Any object': 'Any object',
    'Any submitted score that is higher than the set value will not be saved in the leaderboard.':
      'Any submitted score that is higher than the set value will not be saved in the leaderboard.',
    'Any submitted score that is lower than the set value will not be saved in the leaderboard.':
      'Any submitted score that is lower than the set value will not be saved in the leaderboard.',
    'Any unsaved changes in the project will be lost.':
      'Any unsaved changes in the project will be lost.',
    'Anyone can access it.': 'Anyone can access it.',
    "Anyone with the link can see it, but it is not listed in your game's leaderboards.":
      "Anyone with the link can see it, but it is not listed in your game's leaderboards.",
    Appearance: 'Appearance',
    Apply: 'Apply',
    'Apply changes': 'Apply changes',
    'Apply changes to preview': 'Apply changes to preview',
    'Apply changes to the running preview':
      'Apply changes to the running preview',
    Arabic: 'Arabic',
    'Are you ready?': 'Are you ready?',
    'Are you sure you want to cancel your subscription?':
      'Are you sure you want to cancel your subscription?',
    'Are you sure you want to cancel your subscription? Your access to GDevelop premium features will end IMMEDIATELY.':
      'Are you sure you want to cancel your subscription? Your access to GDevelop premium features will end IMMEDIATELY.',
    'Are you sure you want to change your plan? Your next payment will be pro-rated.':
      'Are you sure you want to change your plan? Your next payment will be pro-rated.',
    "Are you sure you want to delete this entry? This can't be undone.":
      "Are you sure you want to delete this entry? This can't be undone.",
    'Are you sure you want to quit GDevelop?':
      'Are you sure you want to quit GDevelop?',
    "Are you sure you want to remove these external events? This can't be undone.":
      "Are you sure you want to remove these external events? This can't be undone.",
    'Are you sure you want to remove this animation?':
      'Are you sure you want to remove this animation?',
    'Are you sure you want to remove this animation? You will lose the custom collision mask you have set for this object.':
      'Are you sure you want to remove this animation? You will lose the custom collision mask you have set for this object.',
    "Are you sure you want to remove this extension? This can't be undone.":
      "Are you sure you want to remove this extension? This can't be undone.",
    "Are you sure you want to remove this external layout? This can't be undone.":
      "Are you sure you want to remove this external layout? This can't be undone.",
    "Are you sure you want to remove this object? This can't be undone.":
      "Are you sure you want to remove this object? This can't be undone.",
    "Are you sure you want to remove this scene? This can't be undone.":
      "Are you sure you want to remove this scene? This can't be undone.",
    'Are you sure you want to reset all shortcuts to their default values?':
      'Are you sure you want to reset all shortcuts to their default values?',
    'Are you sure you want to unregister this game?':
      'Are you sure you want to unregister this game?',
    Array: 'Array',
    'Articles, wiki and much more.': 'Articles, wiki and much more.',
    'As a percent of the game width.': 'As a percent of the game width.',
    'As a teacher, you will use one seat in the plan so make sure to include yourself!':
      'As a teacher, you will use one seat in the plan so make sure to include yourself!',
    'Ask for feedback on all build pages':
      'Ask for feedback on all build pages',
    'Ask your questions to the community':
      'Ask your questions to the community',
    'Ask your questions.': 'Ask your questions.',
    'Asset Store': 'Asset Store',
    'Asset modification': 'Asset modification',
    'Asset pack not found': 'Asset pack not found',
    'Asset pack not found - An error occurred, please try again later.':
      'Asset pack not found - An error occurred, please try again later.',
    'Asset packs': 'Asset packs',
    'Asset packs will be linked to your user account and available for all your projects. Log-in or sign-up to purchase this pack (or restore your existing purchase).':
      'Asset packs will be linked to your user account and available for all your projects. Log-in or sign-up to purchase this pack (or restore your existing purchase).',
    'Asset store password': 'Asset store password',
    Assets: 'Assets',
    'Assets (coming soon!)': 'Assets (coming soon!)',
    Audio: 'Audio',
    'Audio resource': 'Audio resource',
    'Audio resource (JavaScript only)': 'Audio resource (JavaScript only)',
    Audios: 'Audios',
    Authors: 'Authors',
    'Authors:': 'Authors:',
    'Auto download and install updates (recommended)':
      'Auto download and install updates (recommended)',
    'Auto-save project on Preview': 'Auto-save project on Preview',
    'Automatic collision mask activated. Click on the button to replace it with a custom one.':
      'Automatic collision mask activated. Click on the button to replace it with a custom one.',
    'Automatic creation of lighting layer':
      'Automatic creation of lighting layer',
    'Automatically follow the base layer.':
      'Automatically follow the base layer.',
    'Automatically re-open the project edited during last session':
      'Automatically re-open the project edited during last session',
    'Average user feedback': 'Average user feedback',
    Back: 'Back',
    'Back (Additional button, typically the Browser Back button)':
      'Back (Additional button, typically the Browser Back button)',
    'Back face': 'Back face',
    'Back to discover': 'Back to discover',
    Background: 'Background',
    'Background color': 'Background color',
    'Background color:': 'Background color:',
    'Background fade in duration (in seconds)':
      'Background fade in duration (in seconds)',
    'Background image': 'Background image',
    Backgrounds: 'Backgrounds',
    'Base layer': 'Base layer',
    'Base layer properties': 'Base layer properties',
    "Be careful with this action, you may have problems exiting the preview if you don't add a way to toggle it back.":
      "Be careful with this action, you may have problems exiting the preview if you don't add a way to toggle it back.",
    "Before installing this asset, it's strongly recommended to update these extensions{0}Do you want to update it now ?": function(
      a
    ) {
      return [
        "Before installing this asset, it's strongly recommended to update these extensions",
        a('0'),
        'Do you want to update it now ?',
      ];
    },
    "Before you go, make sure that you've unpublished all your games on gd.games. Otherwise they will stay visible to the community. Are you sure you want to permanently delete your account? This action cannot be undone.":
      "Before you go, make sure that you've unpublished all your games on gd.games. Otherwise they will stay visible to the community. Are you sure you want to permanently delete your account? This action cannot be undone.",
    'Beginner course': 'Beginner course',
    Behavior: 'Behavior',
    'Behavior (for the previous object)': 'Behavior (for the previous object)',
    'Behavior functions': 'Behavior functions',
    'Behavior name': 'Behavior name',
    'Behavior properties': 'Behavior properties',
    'Behavior type': 'Behavior type',
    Behaviors: 'Behaviors',
    'Behaviors add features to objects in a matter of clicks.':
      'Behaviors add features to objects in a matter of clicks.',
    'Behaviors of {objectOrGroupName}: {0} ;': function(a) {
      return ['Behaviors of ', a('objectOrGroupName'), ': ', a('0'), ' ;'];
    },
    Bio: 'Bio',
    'Bitmap Font': 'Bitmap Font',
    'Bitmap font resource': 'Bitmap font resource',
    'Bitmap font resource (JavaScript only)':
      'Bitmap font resource (JavaScript only)',
    'Blog article': 'Blog article',
    Bold: 'Bold',
    Boolean: 'Boolean',
    'Boolean (checkbox)': 'Boolean (checkbox)',
    'Both low-code and code based engines':
      'Both low-code and code based engines',
    Bottom: 'Bottom',
    'Bottom center (on Y axis)': 'Bottom center (on Y axis)',
    'Bottom center (on Z axis)': 'Bottom center (on Z axis)',
    'Bottom face': 'Bottom face',
    'Bottom left corner': 'Bottom left corner',
    'Bottom margin': 'Bottom margin',
    'Bottom right corner': 'Bottom right corner',
    'Bounce rate': 'Bounce rate',
    Box: 'Box',
    Branding: 'Branding',
    'Branding and Loading screen': 'Branding and Loading screen',
    'Bring to front': 'Bring to front',
    Browse: 'Browse',
    'Browse all': 'Browse all',
    'Browse all templates': 'Browse all templates',
    Browser: 'Browser',
    Build: 'Build',
    'Build an expression': 'Build an expression',
    'Build and download': 'Build and download',
    'Build could not start or errored. Please check your internet connection or try again later.':
      'Build could not start or errored. Please check your internet connection or try again later.',
    'Build is starting...': 'Build is starting...',
    'Build more and faster.': 'Build more and faster.',
    'Build open for feedbacks': 'Build open for feedbacks',
    Building: 'Building',
    Builds: 'Builds',
    Bundles: 'Bundles',
    'Buy GDevelop goodies and swag': 'Buy GDevelop goodies and swag',
    'Buy for {0}': function(a) {
      return ['Buy for ', a('0')];
    },
    'Buy me a coffee': 'Buy me a coffee',
    'By creating an account and using GDevelop, you agree to the [Terms and Conditions](https://gdevelop.io/page/terms-and-conditions).':
      'By creating an account and using GDevelop, you agree to the [Terms and Conditions](https://gdevelop.io/page/terms-and-conditions).',
    'Calibrating sensors': 'Calibrating sensors',
    Camera: 'Camera',
    "Can't check if the game is registered online.":
      "Can't check if the game is registered online.",
    "Can't load the announcements. Verify your internet connection or try again later.":
      "Can't load the announcements. Verify your internet connection or try again later.",
    "Can't load the example. Verify your internet connection or try again later.":
      "Can't load the example. Verify your internet connection or try again later.",
    "Can't load the extension registry. Verify your internet connection or try again later.":
      "Can't load the extension registry. Verify your internet connection or try again later.",
    "Can't load the games. Verify your internet connection or retry later.":
      "Can't load the games. Verify your internet connection or retry later.",
    "Can't load the results. Verify your internet connection or retry later.":
      "Can't load the results. Verify your internet connection or retry later.",
    "Can't load the tutorials. Verify your internet connection or retry later.":
      "Can't load the tutorials. Verify your internet connection or retry later.",
    "Can't properly export the game.": "Can't properly export the game.",
    "Can't upload your game to the build service.":
      "Can't upload your game to the build service.",
    Cancel: 'Cancel',
    'Cancel and close': 'Cancel and close',
    'Cancel changes': 'Cancel changes',
    'Cancel my subscription': 'Cancel my subscription',
    'Cancel my subscription now': 'Cancel my subscription now',
    'Cancel your changes?': 'Cancel your changes?',
    'Cancel your subscription': 'Cancel your subscription',
    'Cannot filter on both asset packs and assets at the same time. Try clearing one of the filters!':
      'Cannot filter on both asset packs and assets at the same time. Try clearing one of the filters!',
    'Cannot see the exports': 'Cannot see the exports',
    'Case insensitive': 'Case insensitive',
    Categories: 'Categories',
    'Category (shown in the editor)': 'Category (shown in the editor)',
    'Cell height (in pixels)': 'Cell height (in pixels)',
    'Cell width (in pixels)': 'Cell width (in pixels)',
    Center: 'Center',
    'Change editor zoom': 'Change editor zoom',
    'Change height to fit the screen or window size':
      'Change height to fit the screen or window size',
    'Change my email': 'Change my email',
    'Change the default prefix for player names':
      'Change the default prefix for player names',
    'Change the name in the game properties.':
      'Change the name in the game properties.',
    'Change the package name in the game properties.':
      'Change the package name in the game properties.',
    'Change to allow custom player usernames':
      'Change to allow custom player usernames',
    'Change to ignore custom player usernames':
      'Change to ignore custom player usernames',
    'Change width to fit the screen or window size':
      'Change width to fit the screen or window size',
    'Change your email': 'Change your email',
    Characters: 'Characters',
    'Check our premiums plans': 'Check our premiums plans',
    'Check that the file exists, that this file is a proper game created with GDevelop and that you have the authorization to open it.':
      'Check that the file exists, that this file is a proper game created with GDevelop and that you have the authorization to open it.',
    "Check that you don't have any blocked popup (if so, allow them and retry) and that you have the authorization for reading the file you're trying to access.":
      "Check that you don't have any blocked popup (if so, allow them and retry) and that you have the authorization for reading the file you're trying to access.",
    'Check the logs to see if there is an explanation about what went wrong, or try again later.':
      'Check the logs to see if there is an explanation about what went wrong, or try again later.',
    'Checking tools': 'Checking tools',
    Children: 'Children',
    Chinese: 'Chinese',
    Choose: 'Choose',
    'Choose $(firstObject)': 'Choose $(firstObject)',
    'Choose $(secondObject)': 'Choose $(secondObject)',
    'Choose GDevelop language': 'Choose GDevelop language',
    'Choose a category to display filters':
      'Choose a category to display filters',
    'Choose a file': 'Choose a file',
    'Choose a file or folder': 'Choose a file or folder',
    'Choose a folder for the new game': 'Choose a folder for the new game',
    'Choose a font': 'Choose a font',
    'Choose a function, or a function of a behavior, to edit its events.':
      'Choose a function, or a function of a behavior, to edit its events.',
    'Choose a function, or a function of a behavior, to set the parameters that it accepts.':
      'Choose a function, or a function of a behavior, to set the parameters that it accepts.',
    'Choose a key': 'Choose a key',
    'Choose a layer': 'Choose a layer',
    'Choose a leaderboard': 'Choose a leaderboard',
    'Choose a leaderboard (optional)': 'Choose a leaderboard (optional)',
    'Choose a mouse button': 'Choose a mouse button',
    'Choose a name for your new project': 'Choose a name for your new project',
    'Choose a new behavior function ("method")':
      'Choose a new behavior function ("method")',
    'Choose a new extension function': 'Choose a new extension function',
    'Choose a new object function ("method")':
      'Choose a new object function ("method")',
    'Choose a parameter': 'Choose a parameter',
    'Choose a scene': 'Choose a scene',
    'Choose a subscription': 'Choose a subscription',
    'Choose a workspace folder': 'Choose a workspace folder',
    'Choose an animation': 'Choose an animation',
    'Choose an animation and frame to edit the collision masks':
      'Choose an animation and frame to edit the collision masks',
    'Choose an animation and frame to edit the points':
      'Choose an animation and frame to edit the points',
    'Choose an asset to represent your main character!':
      'Choose an asset to represent your main character!',
    'Choose an effect': 'Choose an effect',
    'Choose an element to inspect in the list':
      'Choose an element to inspect in the list',
    'Choose an export folder': 'Choose an export folder',
    'Choose an external layout': 'Choose an external layout',
    'Choose an icon for the extension': 'Choose an icon for the extension',
    'Choose an object': 'Choose an object',
    'Choose an object to add to the group':
      'Choose an object to add to the group',
    'Choose an operator': 'Choose an operator',
    'Choose an option': 'Choose an option',
    'Choose and add an event': 'Choose and add an event',
    'Choose and add an event...': 'Choose and add an event...',
    'Choose and enter a package name in the game properties.':
      'Choose and enter a package name in the game properties.',
    'Choose another location': 'Choose another location',
    'Choose folder': 'Choose folder',
    'Choose from asset store': 'Choose from asset store',
    'Choose one or more files': 'Choose one or more files',
    'Choose the 3D model file (.glb) to use':
      'Choose the 3D model file (.glb) to use',
    'Choose the JSON/LDtk file to use': 'Choose the JSON/LDtk file to use',
    'Choose the associated scene:': 'Choose the associated scene:',
    'Choose the audio file to use': 'Choose the audio file to use',
    'Choose the bitmap font file (.fnt, .xml) to use':
      'Choose the bitmap font file (.fnt, .xml) to use',
    'Choose the effect to apply': 'Choose the effect to apply',
    'Choose the font file to use': 'Choose the font file to use',
    'Choose the image file to use': 'Choose the image file to use',
    'Choose the json file to use': 'Choose the json file to use',
    'Choose the scene': 'Choose the scene',
    'Choose the tileset to use': 'Choose the tileset to use',
    'Choose the upload key to use to identify your Android App Bundle. In most cases you don\'t need to change this. Use the "Old upload key" if you used to publish your game as an APK and you activated Play App Signing before switching to Android App Bundle.':
      'Choose the upload key to use to identify your Android App Bundle. In most cases you don\'t need to change this. Use the "Old upload key" if you used to publish your game as an APK and you activated Play App Signing before switching to Android App Bundle.',
    'Choose the video file to use': 'Choose the video file to use',
    'Choose this plan': 'Choose this plan',
    'Choose where to add the assets:': 'Choose where to add the assets:',
    'Choose where to create the game': 'Choose where to create the game',
    'Choose where to create your projects':
      'Choose where to create your projects',
    'Choose where to export the game': 'Choose where to export the game',
    'Choose where to load the project from':
      'Choose where to load the project from',
    'Choose where to save the project to':
      'Choose where to save the project to',
    'Choose...': 'Choose...',
    Circle: 'Circle',
    Classrooms: 'Classrooms',
    'Clear all filters': 'Clear all filters',
    'Clear the rendered image between each frame':
      'Clear the rendered image between each frame',
    'Click here to test the link.': 'Click here to test the link.',
    'Click on "**Preview**" and move your character with the **arrow keys**!':
      'Click on "**Preview**" and move your character with the **arrow keys**!',
    'Click on an instance in the scene to display its properties':
      'Click on an instance in the scene to display its properties',
    'Click the image to start!': 'Click the image to start!',
    'Click to choose for which objects this event will be repeated':
      'Click to choose for which objects this event will be repeated',
    'Click to choose how many times will be repeated':
      'Click to choose how many times will be repeated',
    Close: 'Close',
    'Close GDevelop': 'Close GDevelop',
    'Close Instances List Panel': 'Close Instances List Panel',
    'Close Layers Panel': 'Close Layers Panel',
    'Close Object Groups Panel': 'Close Object Groups Panel',
    'Close Objects Panel': 'Close Objects Panel',
    'Close Project': 'Close Project',
    'Close Properties Panel': 'Close Properties Panel',
    'Close all': 'Close all',
    'Close and launch a new preview': 'Close and launch a new preview',
    'Close others': 'Close others',
    'Close project': 'Close project',
    'Close the project? Any changes that have not been saved will be lost.':
      'Close the project? Any changes that have not been saved will be lost.',
    'Cloud build': 'Cloud build',
    'Code editor Theme': 'Code editor Theme',
    Collaborators: 'Collaborators',
    'Collapse All': 'Collapse All',
    'Collisions handling with the Physics engine':
      'Collisions handling with the Physics engine',
    Color: 'Color',
    'Color (text)': 'Color (text)',
    'Color:': 'Color:',
    'Column title': 'Column title',
    'Command palette keyboard shortcut': 'Command palette keyboard shortcut',
    Community: 'Community',
    'Community Discord Chat': 'Community Discord Chat',
    'Community Forums': 'Community Forums',
    'Community extension': 'Community extension',
    'Community-made': 'Community-made',
    'Company name': 'Company name',
    'Company or Team size': 'Company or Team size',
    'Company, University or School name': 'Company, University or School name',
    'Complete your payment on the web browser':
      'Complete your payment on the web browser',
    'Complete your purchase with the app store.':
      'Complete your purchase with the app store.',
    'Compressing before upload...': 'Compressing before upload...',
    Condition: 'Condition',
    Conditions: 'Conditions',
    Configuration: 'Configuration',
    'Configure the external events': 'Configure the external events',
    'Configure the external layout': 'Configure the external layout',
    Confirm: 'Confirm',
    'Confirm the opening': 'Confirm the opening',
    'Confirm your email': 'Confirm your email',
    'Confirming your subscription': 'Confirming your subscription',
    "Congratulations! You've finished this tutorial!":
      "Congratulations! You've finished this tutorial!",
    'Congratulations, your new subscription is now active! You can now use the services unlocked with this plan.':
      'Congratulations, your new subscription is now active! You can now use the services unlocked with this plan.',
    Console: 'Console',
    'Contact us for more information.': 'Contact us for more information.',
    'Contact:': 'Contact:',
    Content: 'Content',
    Continue: 'Continue',
    'Continue anyway': 'Continue anyway',
    'Continue editing': 'Continue editing',
    'Contribute to GDevelop': 'Contribute to GDevelop',
    Contributions: 'Contributions',
    Contributors: 'Contributors',
    'Contributors, in no particular order:':
      'Contributors, in no particular order:',
    'Control the camera': 'Control the camera',
    'Copied to clipboard!': 'Copied to clipboard!',
    Copy: 'Copy',
    'Copy all behaviors': 'Copy all behaviors',
    'Copy all effects': 'Copy all effects',
    'Copy build link': 'Copy build link',
    'Copy file path': 'Copy file path',
    Cordova: 'Cordova',
    'Could not create the object': 'Could not create the object',
    'Could not delete the build. Verify your internet connection or try again later.':
      'Could not delete the build. Verify your internet connection or try again later.',
    'Could not install the asset': 'Could not install the asset',
    'Could not launch the preview': 'Could not launch the preview',
    'Could not update the build name. Verify your internet connection or try again later.':
      'Could not update the build name. Verify your internet connection or try again later.',
    Courses: 'Courses',
    Create: 'Create',
    'Create Extensions for GDevelop': 'Create Extensions for GDevelop',
    'Create a GDevelop account to continue':
      'Create a GDevelop account to continue',
    'Create a blank project': 'Create a blank project',
    'Create a leaderboard': 'Create a leaderboard',
    'Create a new extension': 'Create a new extension',
    'Create a new instance on the scene (will be at position 0;0):':
      'Create a new instance on the scene (will be at position 0;0):',
    'Create a new project': 'Create a new project',
    'Create a new room': 'Create a new room',
    'Create a project': 'Create a project',
    'Create a project first to add assets from the asset store':
      'Create a project first to add assets from the asset store',
    'Create a room and drag and drop members in it.':
      'Create a room and drag and drop members in it.',
    'Create a variable': 'Create a variable',
    'Create account': 'Create account',
    'Create an Account': 'Create an Account',
    'Create an account': 'Create an account',
    'Create an account or login first to publish your game.':
      'Create an account or login first to publish your game.',
    'Create an account to register your games and to get access to metrics collected anonymously, like the number of daily players and retention of the players after a few days.':
      'Create an account to register your games and to get access to metrics collected anonymously, like the number of daily players and retention of the players after a few days.',
    'Create an account to store your project online.':
      'Create an account to store your project online.',
    'Create and Publish a Fling game': 'Create and Publish a Fling game',
    'Create and modify a text': 'Create and modify a text',
    'Create and use a timer': 'Create and use a timer',
    'Create games for fun': 'Create games for fun',
    'Create games for monetisation': 'Create games for monetisation',
    'Create games for my community': 'Create games for my community',
    'Create installation file': 'Create installation file',
    'Create learning supports for students':
      'Create learning supports for students',
    'Create my account': 'Create my account',
    'Create new leaderboards now': 'Create new leaderboards now',
    'Create or search for new extensions':
      'Create or search for new extensions',
    'Create package for Android': 'Create package for Android',
    'Create project': 'Create project',
    'Create with Jfxr': 'Create with Jfxr',
    'Create with Piskel': 'Create with Piskel',
    'Create with Yarn': 'Create with Yarn',
    'Create your first project using one of our templates or start from scratch.':
      'Create your first project using one of our templates or start from scratch.',
    "Create your game's first leaderboard":
      "Create your game's first leaderboard",
    'Created objects': 'Created objects',
    'Created on {0}': function(a) {
      return ['Created on ', a('0')];
    },
    'Creating new project': 'Creating new project',
    'Creating, modifying and accessing a scene variable':
      'Creating, modifying and accessing a scene variable',
    'Current build online': 'Current build online',
    'Currently edited': 'Currently edited',
    'Custom CSS': 'Custom CSS',
    'Custom display': 'Custom display',
    'Custom size': 'Custom size',
    'Custom upload key (not available yet)':
      'Custom upload key (not available yet)',
    Cut: 'Cut',
    'Dark (colored)': 'Dark (colored)',
    'Dark (plain)': 'Dark (plain)',
    Date: 'Date',
    'Date from which entries are taken into account: {0}': function(a) {
      return ['Date from which entries are taken into account: ', a('0')];
    },
    Debugger: 'Debugger',
    'Debugger is starting...': 'Debugger is starting...',
    'Dedicated support, branding and solutions for engaging your players.':
      'Dedicated support, branding and solutions for engaging your players.',
    Default: 'Default',
    'Default height (in pixels)': 'Default height (in pixels)',
    'Default name for created objects': 'Default name for created objects',
    'Default orientation': 'Default orientation',
    'Default size': 'Default size',
    'Default upload key (recommended)': 'Default upload key (recommended)',
    'Default value': 'Default value',
    'Default width (in pixels)': 'Default width (in pixels)',
    Delete: 'Delete',
    'Delete Entry': 'Delete Entry',
    'Delete Leaderboard': 'Delete Leaderboard',
    'Delete account': 'Delete account',
    'Delete build': 'Delete build',
    'Delete collision mask': 'Delete collision mask',
    'Delete my account': 'Delete my account',
    'Delete object': 'Delete object',
    'Delete option': 'Delete option',
    'Delete project': 'Delete project',
    'Delete score {0} from {1}': function(a) {
      return ['Delete score ', a('0'), ' from ', a('1')];
    },
    'Delete selection': 'Delete selection',
    'Delete the layer': 'Delete the layer',
    'Delete the selected event(s)': 'Delete the selected event(s)',
    'Delete the selected instances from the scene':
      'Delete the selected instances from the scene',
    'Delete the selected resource': 'Delete the selected resource',
    'Delete when out of particles': 'Delete when out of particles',
    Dependencies: 'Dependencies',
    'Dependencies allow to add additional libraries in the exported games. NPM dependencies will be included for Electron builds (Windows, macOS, Linux) and Cordova dependencies will be included for Cordova builds (Android, iOS). Note that this is intended for usage in JavaScript events only. If you are only using standard events, you should not worry about this.':
      'Dependencies allow to add additional libraries in the exported games. NPM dependencies will be included for Electron builds (Windows, macOS, Linux) and Cordova dependencies will be included for Cordova builds (Android, iOS). Note that this is intended for usage in JavaScript events only. If you are only using standard events, you should not worry about this.',
    'Dependency type': 'Dependency type',
    Deprecated: 'Deprecated',
    'Deprecated action': 'Deprecated action',
    'Deprecated condition': 'Deprecated condition',
    Depth: 'Depth',
    Description: 'Description',
    'Description (markdown supported)': 'Description (markdown supported)',
    'Description, displayed in editor': 'Description, displayed in editor',
    'Description, displayed in editor (automatically prefixed by "Compare" or "Return")':
      'Description, displayed in editor (automatically prefixed by "Compare" or "Return")',
    Desktop: 'Desktop',
    'Desktop & Mobile landscape': 'Desktop & Mobile landscape',
    'Desktop (Windows, macOS and Linux) icon':
      'Desktop (Windows, macOS and Linux) icon',
    'Desktop Full HD': 'Desktop Full HD',
    'Desktop builds': 'Desktop builds',
    Details: 'Details',
    'Develop tools for therapy or rehab': 'Develop tools for therapy or rehab',
    'Device orientation (for mobile)': 'Device orientation (for mobile)',
    'Dialog backdrop click behavior': 'Dialog backdrop click behavior',
    Dialogs: 'Dialogs',
    'Did you forget your password?': 'Did you forget your password?',
    'Different objects': 'Different objects',
    Direction: 'Direction',
    'Direction #{i}': function(a) {
      return ['Direction #', a('i')];
    },
    'Directly accessible from your account once purchased':
      'Directly accessible from your account once purchased',
    'Disable GDevelop splash at startup': 'Disable GDevelop splash at startup',
    'Discard changes and open events': 'Discard changes and open events',
    Discord: 'Discord',
    'Discord server, e.g: https://discord.gg/...':
      'Discord server, e.g: https://discord.gg/...',
    'Display GDevelop logo at startup (in exported game)':
      'Display GDevelop logo at startup (in exported game)',
    'Display GDevelop watermark after the game is loaded (in exported game)':
      'Display GDevelop watermark after the game is loaded (in exported game)',
    "Display What's New when a new version is launched (recommended)":
      "Display What's New when a new version is launched (recommended)",
    'Display a Health bar for the player':
      'Display a Health bar for the player',
    'Display as time': 'Display as time',
    'Display assignment operators in Events Sheets':
      'Display assignment operators in Events Sheets',
    'Display both 2D and 3D objects (default)':
      'Display both 2D and 3D objects (default)',
    'Display object thumbnails in Events Sheets':
      'Display object thumbnails in Events Sheets',
    'Displayed score': 'Displayed score',
    'Do nothing': 'Do nothing',
    'Do you have a Patreon? Ko-fi? Paypal?':
      'Do you have a Patreon? Ko-fi? Paypal?',
    'Do you really want to permanently delete the leaderboard {0}?': function(
      a
    ) {
      return [
        'Do you really want to permanently delete the leaderboard ',
        a('0'),
        '?',
      ];
    },
    'Do you really want to permanently delete your account?':
      'Do you really want to permanently delete your account?',
    'Do you really want to permanently delete your project {projectName}?': function(
      a
    ) {
      return [
        'Do you really want to permanently delete your project ',
        a('projectName'),
        '?',
      ];
    },
    'Do you want to continue?': 'Do you want to continue?',
    'Do you want to remove all references to this object in groups and events (actions and conditions using the object)?':
      'Do you want to remove all references to this object in groups and events (actions and conditions using the object)?',
    Documentation: 'Documentation',
    "Don't have an account yet?": "Don't have an account yet?",
    "Don't play the animation when the object is far from the camera or hidden (recommended for performance)":
      "Don't play the animation when the object is far from the camera or hidden (recommended for performance)",
    "Don't save this project now": "Don't save this project now",
    "Don't show this screen on next startup":
      "Don't show this screen on next startup",
    'Donate link': 'Donate link',
    Done: 'Done',
    'Done!': 'Done!',
    'Download (APK)': 'Download (APK)',
    'Download (Android App Bundle)': 'Download (Android App Bundle)',
    'Download GDevelop desktop version': 'Download GDevelop desktop version',
    'Download GDevelop desktop version to generate the Android and iOS icons of your game.':
      'Download GDevelop desktop version to generate the Android and iOS icons of your game.',
    'Download a copy': 'Download a copy',
    'Download and use a prefab': 'Download and use a prefab',
    'Download desktop app': 'Download desktop app',
    'Download log files': 'Download log files',
    'Download pack sounds': 'Download pack sounds',
    'Download the Instant Game archive': 'Download the Instant Game archive',
    'Download the compressed game and resources':
      'Download the compressed game and resources',
    'Download the exported game': 'Download the exported game',
    'Downloading game resources...': 'Downloading game resources...',
    'Drag $(firstObject) from the menu to the canvas.':
      'Drag $(firstObject) from the menu to the canvas.',
    'Draw the shapes relative to the object position on the scene':
      'Draw the shapes relative to the object position on the scene',
    Duplicate: 'Duplicate',
    'Duplicate selection': 'Duplicate selection',
    Duration: 'Duration',
    Dynamic: 'Dynamic',
    'Ease of use': 'Ease of use',
    'Easy to modify': 'Easy to modify',
    Edge: 'Edge',
    Edit: 'Edit',
    'Edit Grid Options': 'Edit Grid Options',
    'Edit Object Variables': 'Edit Object Variables',
    'Edit behaviors': 'Edit behaviors',
    'Edit behaviors ({eventsBasedBehaviorsCount})': function(a) {
      return ['Edit behaviors (', a('eventsBasedBehaviorsCount'), ')'];
    },
    'Edit build name': 'Edit build name',
    'Edit collision masks': 'Edit collision masks',
    'Edit comment': 'Edit comment',
    'Edit effects': 'Edit effects',
    'Edit effects ({effectsCount})': function(a) {
      return ['Edit effects (', a('effectsCount'), ')'];
    },
    'Edit extension options': 'Edit extension options',
    'Edit functions (not attached to behaviors) ({eventsFunctionsCount})': function(
      a
    ) {
      return [
        'Edit functions (not attached to behaviors) (',
        a('eventsFunctionsCount'),
        ')',
      ];
    },
    'Edit game details': 'Edit game details',
    'Edit global variables': 'Edit global variables',
    'Edit group': 'Edit group',
    'Edit layer effects...': 'Edit layer effects...',
    'Edit layer...': 'Edit layer...',
    'Edit lighting properties': 'Edit lighting properties',
    'Edit loading screen': 'Edit loading screen',
    'Edit my profile': 'Edit my profile',
    'Edit object': 'Edit object',
    'Edit object behaviors...': 'Edit object behaviors...',
    'Edit object effects...': 'Edit object effects...',
    'Edit object group...': 'Edit object group...',
    'Edit object tags': 'Edit object tags',
    'Edit object variables': 'Edit object variables',
    'Edit object variables...': 'Edit object variables...',
    'Edit object {0}': function(a) {
      return ['Edit object ', a('0')];
    },
    'Edit object...': 'Edit object...',
    'Edit points': 'Edit points',
    'Edit properties': 'Edit properties',
    'Edit scene properties': 'Edit scene properties',
    'Edit scene variables': 'Edit scene variables',
    'Edit this action events': 'Edit this action events',
    'Edit this behavior': 'Edit this behavior',
    'Edit this condition events': 'Edit this condition events',
    'Edit with Jfxr': 'Edit with Jfxr',
    'Edit with Piskel': 'Edit with Piskel',
    'Edit with Yarn': 'Edit with Yarn',
    'Edit your GDevelop profile': 'Edit your GDevelop profile',
    'Edit your profile to pick a username!':
      'Edit your profile to pick a username!',
    'Edit {0}': function(a) {
      return ['Edit ', a('0')];
    },
    'Edit {objectName}': function(a) {
      return ['Edit ', a('objectName')];
    },
    'Editor without transitions': 'Editor without transitions',
    Educational: 'Educational',
    'Effect name:': 'Effect name:',
    Effects: 'Effects',
    'Effects cannot have empty names': 'Effects cannot have empty names',
    'Effects create visual changes to the object.':
      'Effects create visual changes to the object.',
    'Either this game is not registered or you are not its owner, so you cannot see its builds.':
      'Either this game is not registered or you are not its owner, so you cannot see its builds.',
    Email: 'Email',
    'Email sent to {0}, waiting for validation...': function(a) {
      return ['Email sent to ', a('0'), ', waiting for validation...'];
    },
    'Email verified': 'Email verified',
    'Embedded help and tutorials': 'Embedded help and tutorials',
    'Emit all ambient light': 'Emit all ambient light',
    'Enable "Close project" shortcut ( {0} ) to close preview window': function(
      a
    ) {
      return [
        'Enable "Close project" shortcut ( ',
        a('0'),
        ' ) to close preview window',
      ];
    },
    'End opacity (0-255)': 'End opacity (0-255)',
    Engagement: 'Engagement',
    English: 'English',
    'Ensure that you are connected to internet and that the URL used is correct, then try again.':
      'Ensure that you are connected to internet and that the URL used is correct, then try again.',
    'Enter a version in the game properties.':
      'Enter a version in the game properties.',
    'Enter the effect name': 'Enter the effect name',
    'Enter the expression parameters': 'Enter the expression parameters',
    'Enter the leaderboard id as a text or an expression':
      'Enter the leaderboard id as a text or an expression',
    'Enter the name of an object.': 'Enter the name of an object.',
    'Enter the name of the object': 'Enter the name of the object',
    'Enter the parameter name (mandatory)':
      'Enter the parameter name (mandatory)',
    'Enter the property name': 'Enter the property name',
    'Enter the sentence that will be displayed in the events sheet':
      'Enter the sentence that will be displayed in the events sheet',
    'Enter the text to be displayed': 'Enter the text to be displayed',
    'Enter the text to be displayed by the object':
      'Enter the text to be displayed by the object',
    'Enter your code here': 'Enter your code here',
    'Entire games': 'Entire games',
    Error: 'Error',
    'Error retrieving the examples': 'Error retrieving the examples',
    'Error retrieving the extensions': 'Error retrieving the extensions',
    'Error while building of the game. Check the logs of the build for more details.':
      'Error while building of the game. Check the logs of the build for more details.',
    'Error while building the game. Check the logs of the build for more details.':
      'Error while building the game. Check the logs of the build for more details.',
    'Error while building the game. Try again later. Your internet connection may be slow or one of your resources may be corrupted.':
      'Error while building the game. Try again later. Your internet connection may be slow or one of your resources may be corrupted.',
    'Error while compressing the game.': 'Error while compressing the game.',
    'Error while downloading the game resources. Check your internet connection and that all resources of the game are valid in the Resources editor.':
      'Error while downloading the game resources. Check your internet connection and that all resources of the game are valid in the Resources editor.',
    'Error while exporting the game.': 'Error while exporting the game.',
    'Error while loading the asset. Verify your internet connection or try again later.':
      'Error while loading the asset. Verify your internet connection or try again later.',
    'Error while loading the collaborators. Verify your internet connection or try again later.':
      'Error while loading the collaborators. Verify your internet connection or try again later.',
    'Error while uploading the game. Check your internet connection or try again later.':
      'Error while uploading the game. Check your internet connection or try again later.',
    'Escape key behavior when editing an parameter inline':
      'Escape key behavior when editing an parameter inline',
    'Even if the action is used to send a score with a custom player username, this name will be ignored by the leaderboard.':
      'Even if the action is used to send a score with a custom player username, this name will be ignored by the leaderboard.',
    Events: 'Events',
    'Events Sheet': 'Events Sheet',
    'Events analysis': 'Events analysis',
    'Events define the rules of a game.': 'Events define the rules of a game.',
    'Events that will be run at every frame (roughly 60 times per second), after the events from the events sheet of the scene.':
      'Events that will be run at every frame (roughly 60 times per second), after the events from the events sheet of the scene.',
    'Events that will be run at every frame (roughly 60 times per second), before the events from the events sheet of the scene.':
      'Events that will be run at every frame (roughly 60 times per second), before the events from the events sheet of the scene.',
    'Events that will be run at every frame (roughly 60 times per second), for every object that has the behavior attached, after the events from the events sheet.':
      'Events that will be run at every frame (roughly 60 times per second), for every object that has the behavior attached, after the events from the events sheet.',
    'Events that will be run at every frame (roughly 60 times per second), for every object that has the behavior attached, before the events from the events sheet are launched.':
      'Events that will be run at every frame (roughly 60 times per second), for every object that has the behavior attached, before the events from the events sheet are launched.',
    'Events that will be run at every frame (roughly 60 times per second), for every object, after the events from the events sheet.':
      'Events that will be run at every frame (roughly 60 times per second), for every object, after the events from the events sheet.',
    'Events that will be run once when a scene is about to be unloaded from memory. The previous scene that was paused will be resumed after this.':
      'Events that will be run once when a scene is about to be unloaded from memory. The previous scene that was paused will be resumed after this.',
    'Events that will be run once when a scene is paused (another scene is run on top of it).':
      'Events that will be run once when a scene is paused (another scene is run on top of it).',
    'Events that will be run once when a scene is resumed (after it was previously paused).':
      'Events that will be run once when a scene is resumed (after it was previously paused).',
    'Events that will be run once when a scene of the game is loaded, before the scene events.':
      'Events that will be run once when a scene of the game is loaded, before the scene events.',
    "Events that will be run once when the behavior is deactivated on an object (step events won't be run until the behavior is activated again).":
      "Events that will be run once when the behavior is deactivated on an object (step events won't be run until the behavior is activated again).",
    'Events that will be run once when the behavior is re-activated on an object (after it was previously deactivated).':
      'Events that will be run once when the behavior is re-activated on an object (after it was previously deactivated).',
    'Events that will be run once when the first scene of the game is loaded, before any other events.':
      'Events that will be run once when the first scene of the game is loaded, before any other events.',
    'Events that will be run once, after the object is removed from the scene and before it is entirely removed from memory.':
      'Events that will be run once, after the object is removed from the scene and before it is entirely removed from memory.',
    'Events that will be run once, when an object is created with this behavior being attached to it.':
      'Events that will be run once, when an object is created with this behavior being attached to it.',
    'Events that will be run once, when an object is created.':
      'Events that will be run once, when an object is created.',
    'Events that will be run when the preview is being hot-reloaded.':
      'Events that will be run when the preview is being hot-reloaded.',
    'Every animation from the GLB file is already in the list.':
      'Every animation from the GLB file is already in the list.',
    'Ex: $': 'Ex: $',
    'Ex: coins': 'Ex: coins',
    'Example: Check if the object is flashing.':
      'Example: Check if the object is flashing.',
    'Example: Equipped shield name': 'Example: Equipped shield name',
    'Example: Flash the object': 'Example: Flash the object',
    'Example: Is flashing': 'Example: Is flashing',
    'Example: Make the object flash for 5 seconds.':
      'Example: Make the object flash for 5 seconds.',
    'Example: Remaining life': 'Example: Remaining life',
    'Example: Return the name of the shield equipped by the player.':
      'Example: Return the name of the shield equipped by the player.',
    'Example: Return the number of remaining lives for the player.':
      'Example: Return the number of remaining lives for the player.',
    Examples: 'Examples',
    'Examples ({0})': function(a) {
      return ['Examples (', a('0'), ')'];
    },
    'Exclude attribution requirements': 'Exclude attribution requirements',
    'Existing behaviors': 'Existing behaviors',
    'Existing effects': 'Existing effects',
    'Existing properties': 'Existing properties',
    'Exit GDevelop': 'Exit GDevelop',
    'Exit without saving': 'Exit without saving',
    'Expand All to Level': 'Expand All to Level',
    'Experiment with the leaderboard colors using the playground':
      'Experiment with the leaderboard colors using the playground',
    'Experimented creators, ambitious games.':
      'Experimented creators, ambitious games.',
    Expert: 'Expert',
    'Explain and give some examples of what can be achieved with this extension.':
      'Explain and give some examples of what can be achieved with this extension.',
    'Explain what the behavior is doing to the object. Start with a verb when possible.':
      'Explain what the behavior is doing to the object. Start with a verb when possible.',
    'Explanation after an object is installed from the store':
      'Explanation after an object is installed from the store',
    'Explore assets': 'Explore assets',
    'Explore by category': 'Explore by category',
    'Explore games made by others': 'Explore games made by others',
    Export: 'Export',
    'Export (web, iOS, Android)...': 'Export (web, iOS, Android)...',
    'Export as a HTML5 game': 'Export as a HTML5 game',
    'Export extension': 'Export extension',
    'Export game': 'Export game',
    'Export in progress...': 'Export in progress...',
    'Export name': 'Export name',
    'Export object': 'Export object',
    'Export to a file': 'Export to a file',
    'Export {0}': function(a) {
      return ['Export ', a('0')];
    },
    Exports: 'Exports',
    Expression: 'Expression',
    'Expression and condition': 'Expression and condition',
    'Extension (storing the function)': 'Extension (storing the function)',
    'Extension update': 'Extension update',
    Extensions: 'Extensions',
    'Extensions ({0})': function(a) {
      return ['Extensions (', a('0'), ')'];
    },
    'Extensions can provide functions (which can be actions, conditions or expressions) or new behaviors.':
      'Extensions can provide functions (which can be actions, conditions or expressions) or new behaviors.',
    'External events': 'External events',
    'External layouts': 'External layouts',
    'External websites': 'External websites',
    'Extract Events to a Function': 'Extract Events to a Function',
    'Extract the events in a function': 'Extract the events in a function',
    'Extreme score must be equal or higher than {extremeAllowedScoreMin}.': function(
      a
    ) {
      return [
        'Extreme score must be equal or higher than ',
        a('extremeAllowedScoreMin'),
        '.',
      ];
    },
    'Extreme score must be lower than {extremeAllowedScoreMax}.': function(a) {
      return [
        'Extreme score must be lower than ',
        a('extremeAllowedScoreMax'),
        '.',
      ];
    },
    'FPS:': 'FPS:',
    Facebook: 'Facebook',
    'Facebook Instant Games': 'Facebook Instant Games',
    False: 'False',
    'False (not checked)': 'False (not checked)',
    'Far plane distance': 'Far plane distance',
    'Features and extensions reviewed by GDevelop':
      'Features and extensions reviewed by GDevelop',
    Feedback: 'Feedback',
    'Field of view (in degrees)': 'Field of view (in degrees)',
    File: 'File',
    'File name': 'File name',
    'File(s) from your device': 'File(s) from your device',
    'Fill color': 'Fill color',
    'Fill opacity (0-255)': 'Fill opacity (0-255)',
    'Filter the logs by group': 'Filter the logs by group',
    Filters: 'Filters',
    'Finally, select the target **object** ($(secondObject)).':
      'Finally, select the target **object** ($(secondObject)).',
    'Find all the learning content related to GDevelop.':
      'Find all the learning content related to GDevelop.',
    'Find how to implement the most common game mechanics and more':
      'Find how to implement the most common game mechanics and more',
    'Find the complete documentation on everything':
      'Find the complete documentation on everything',
    'Find these actions on the Menu close to the \u201CHome\u201D tab.':
      'Find these actions on the Menu close to the \u201CHome\u201D tab.',
    'Find your finished game on the \u201CBuild\u201D section. Or restart the tutorial by clicking on the card.':
      'Find your finished game on the \u201CBuild\u201D section. Or restart the tutorial by clicking on the card.',
    'First editor': 'First editor',
    'Fit content to window': 'Fit content to window',
    'Flow of particles (particles/seconds)':
      'Flow of particles (particles/seconds)',
    Folders: 'Folders',
    Font: 'Font',
    'Font resource': 'Font resource',
    'Font resource (JavaScript only)': 'Font resource (JavaScript only)',
    Fonts: 'Fonts',
    'For a given video resource, only one video will be played in memory and displayed. If you put this object multiple times on the scene, all the instances will be displaying the exact same video (with the same timing and paused/played/stopped state).':
      'For a given video resource, only one video will be played in memory and displayed. If you put this object multiple times on the scene, all the instances will be displaying the exact same video (with the same timing and paused/played/stopped state).',
    'For a pixel type font, you must disable the Smooth checkbox related to your texture in the game resources to disable anti-aliasing.':
      'For a pixel type font, you must disable the Smooth checkbox related to your texture in the game resources to disable anti-aliasing.',
    'For example: player, spaceship, inventory...':
      'For example: player, spaceship, inventory...',
    'For the 3D change to take effect, close and reopen all currently opened scenes.':
      'For the 3D change to take effect, close and reopen all currently opened scenes.',
    "For the lifecycle functions to be executed, you need the extension to be used in the game, either by having at least one action, condition or expression used, or a behavior of the extension added to an object. Otherwise, the extension won't be included in the game.":
      "For the lifecycle functions to be executed, you need the extension to be used in the game, either by having at least one action, condition or expression used, or a behavior of the extension added to an object. Otherwise, the extension won't be included in the game.",
    'Force display both 2D and 3D objects':
      'Force display both 2D and 3D objects',
    'Force display only 2D objects': 'Force display only 2D objects',
    'Force display only 3D objects': 'Force display only 3D objects',
    'Forward (Additional button, typically the Browser Forward button)':
      'Forward (Additional button, typically the Browser Forward button)',
    Frame: 'Frame',
    'Frame #{i}': function(a) {
      return ['Frame #', a('i')];
    },
    Free: 'Free',
    'Free link on GDevelop gaming platform':
      'Free link on GDevelop gaming platform',
    French: 'French',
    'Friend/Word of mouth': 'Friend/Word of mouth',
    'From the same author': 'From the same author',
    'Front face': 'Front face',
    'Full Game Packs': 'Full Game Packs',
    'Full name displayed in editor': 'Full name displayed in editor',
    Fun: 'Fun',
    'Function Configuration': 'Function Configuration',
    'Function name': 'Function name',
    'Function type': 'Function type',
    Functions: 'Functions',
    'GDevelop 5': 'GDevelop 5',
    'GDevelop Cloud': 'GDevelop Cloud',
    'GDevelop Forums': 'GDevelop Forums',
    'GDevelop Premium': 'GDevelop Premium',
    'GDevelop Website': 'GDevelop Website',
    'GDevelop auto-save': 'GDevelop auto-save',
    'GDevelop automatically saved a newer version of this project on {0}. This new version might differ from the one that you manually saved. Which version would you like to open?': function(
      a
    ) {
      return [
        'GDevelop automatically saved a newer version of this project on ',
        a('0'),
        '. This new version might differ from the one that you manually saved. Which version would you like to open?',
      ];
    },
    'GDevelop games on gd.games': 'GDevelop games on gd.games',
    "GDevelop is a full-featured, open-source game engine. Build and publish games for any mobile, desktop or web game store. It's super fast, easy to learn and powered by a community making it better every day.":
      "GDevelop is a full-featured, open-source game engine. Build and publish games for any mobile, desktop or web game store. It's super fast, easy to learn and powered by a community making it better every day.",
    'GDevelop logo style': 'GDevelop logo style',
    'GDevelop was created by Florian "4ian" Rival.':
      'GDevelop was created by Florian "4ian" Rival.',
    'GDevelop was upgraded to a new version! Check out the changes.':
      'GDevelop was upgraded to a new version! Check out the changes.',
    'GDevelop watermark placement': 'GDevelop watermark placement',
    'GDevelop website': 'GDevelop website',
    'GDevelop will save your progress so you can take a break when you need it.':
      'GDevelop will save your progress so you can take a break when you need it.',
    'GDevelop will save your progress, so you can take a break if you need.':
      'GDevelop will save your progress, so you can take a break if you need.',
    'GLB animation name': 'GLB animation name',
    'Game Info': 'Game Info',
    'Game Scenes': 'Game Scenes',
    'Game Templates': 'Game Templates',
    'Game already registered': 'Game already registered',
    'Game analytics': 'Game analytics',
    'Game background': 'Game background',
    'Game builds': 'Game builds',
    'Game built by a GDevelop expert': 'Game built by a GDevelop expert',
    'Game description': 'Game description',
    'Game details': 'Game details',
    'Game export': 'Game export',
    'Game feedbacks': 'Game feedbacks',
    'Game leaderboards': 'Game leaderboards',
    'Game mechanic': 'Game mechanic',
    'Game name': 'Game name',
    'Game name in the game URL': 'Game name in the game URL',
    'Game not found': 'Game not found',
    'Game personalisation': 'Game personalisation',
    'Game preview #{id}': function(a) {
      return ['Game preview #', a('id')];
    },
    'Game properties': 'Game properties',
    'Game resolution height': 'Game resolution height',
    'Game resolution resize mode (fullscreen or window)':
      'Game resolution resize mode (fullscreen or window)',
    'Game resolution width': 'Game resolution width',
    'Game scene size': 'Game scene size',
    'Game settings': 'Game settings',
    'Game studio': 'Game studio',
    'Game template': 'Game template',
    'Game template not found': 'Game template not found',
    'Game template not found - An error occurred, please try again later.':
      'Game template not found - An error occurred, please try again later.',
    'Game templates': 'Game templates',
    'Game templates will be linked to your user account and available for all your projects. Log-in or sign-up to purchase this game template. (or restore your existing purchase).':
      'Game templates will be linked to your user account and available for all your projects. Log-in or sign-up to purchase this game template. (or restore your existing purchase).',
    'Games Dashboard': 'Games Dashboard',
    'Gaming portals (Itch.io, Poki, Facebook...)':
      'Gaming portals (Itch.io, Poki, Facebook...)',
    General: 'General',
    'General:': 'General:',
    "Generate a unique link, playable from any computer or mobile phone's browser.":
      "Generate a unique link, playable from any computer or mobile phone's browser.",
    'Generate expression and action': 'Generate expression and action',
    'Generate icons from a file': 'Generate icons from a file',
    'Generate link': 'Generate link',
    'Generate random name': 'Generate random name',
    'Generate random prompt': 'Generate random prompt',
    Genres: 'Genres',
    'Genres:': 'Genres:',
    'Get Started': 'Get Started',
    'Get a business subscription to unlock custom CSS or contact us.':
      'Get a business subscription to unlock custom CSS or contact us.',
    'Get a silver or gold subscription to disable GDevelop branding.':
      'Get a silver or gold subscription to disable GDevelop branding.',
    'Get a silver or gold subscription to unlock color customization.':
      'Get a silver or gold subscription to unlock color customization.',
    'Get a startup subscription to invite collaborators on your project.':
      'Get a startup subscription to invite collaborators on your project.',
    'Get a subscription': 'Get a subscription',
    'Get a subscription or login': 'Get a subscription or login',
    'Get a subscription to gain more one-click exports, cloud projects, leaderboards and remove the GDevelop splashscreen.':
      'Get a subscription to gain more one-click exports, cloud projects, leaderboards and remove the GDevelop splashscreen.',
    "Get a subscription to unlock more one-click exports and other exclusive features as a premium creator in our community. With a subscription, you're also supporting the development of GDevelop, which is an open-source software.":
      "Get a subscription to unlock more one-click exports and other exclusive features as a premium creator in our community. With a subscription, you're also supporting the development of GDevelop, which is an open-source software.",
    'Get game stats': 'Get game stats',
    'Get inspired and have fun.': 'Get inspired and have fun.',
    'Get {0}!': function(a) {
      return ['Get ', a('0'), '!'];
    },
    'Global Variables': 'Global Variables',
    'Global objects in the project': 'Global objects in the project',
    'Global variable': 'Global variable',
    'Global variables': 'Global variables',
    'Go back': 'Go back',
    'Go back to {translatedExpectedEditor}{sceneMention} to keep creating your game.': function(
      a
    ) {
      return [
        'Go back to ',
        a('translatedExpectedEditor'),
        a('sceneMention'),
        ' to keep creating your game.',
      ];
    },
    'Go to first page': 'Go to first page',
    'Go to the "Learn" section on the app to explore advanced materials.':
      'Go to the "Learn" section on the app to explore advanced materials.',
    'Google Drive': 'Google Drive',
    'Google Drive could not be loaded. Check that you are not offline and have a proper internet connection, then try again.':
      'Google Drive could not be loaded. Check that you are not offline and have a proper internet connection, then try again.',
    'Google Drive folder or existing file to overwrite':
      'Google Drive folder or existing file to overwrite',
    'Got it': 'Got it',
    'Gravity on particles on X axis': 'Gravity on particles on X axis',
    'Gravity on particles on Y axis': 'Gravity on particles on Y axis',
    "Great! Our game now has 2 **objects**, let's see what we can do with them.":
      "Great! Our game now has 2 **objects**, let's see what we can do with them.",
    "Great! Our game now has an **object**, let's see what we can do with it.":
      "Great! Our game now has an **object**, let's see what we can do with it.",
    'Group name': 'Group name',
    'Group name cannot be empty.': 'Group name cannot be empty.',
    'Group: {0}': function(a) {
      return ['Group: ', a('0')];
    },
    Groups: 'Groups',
    'Guided Tour': 'Guided Tour',
    'Guided lessons': 'Guided lessons',
    'Guides and tutorials': 'Guides and tutorials',
    'Have fun!': 'Have fun!',
    'Have look at existing games from the inside':
      'Have look at existing games from the inside',
    "Having the same collision masks for all animations will erase and reset all the other animations collision masks. This can't be undone. Are you sure you want to share these collision masks amongst all the animations of the object?":
      "Having the same collision masks for all animations will erase and reset all the other animations collision masks. This can't be undone. Are you sure you want to share these collision masks amongst all the animations of the object?",
    "Having the same collision masks for all frames will erase and reset all the other frames collision masks. This can't be undone. Are you sure you want to share these collision masks amongst all the frames of the animation?":
      "Having the same collision masks for all frames will erase and reset all the other frames collision masks. This can't be undone. Are you sure you want to share these collision masks amongst all the frames of the animation?",
    "Having the same points for all animations will erase and reset all the other animations points. This can't be undone. Are you sure you want to share these points amongst all the animations of the object?":
      "Having the same points for all animations will erase and reset all the other animations points. This can't be undone. Are you sure you want to share these points amongst all the animations of the object?",
    "Having the same points for all frames will erase and reset all the other frames points. This can't be undone. Are you sure you want to share these points amongst all the frames of the animation?":
      "Having the same points for all frames will erase and reset all the other frames points. This can't be undone. Are you sure you want to share these points amongst all the frames of the animation?",
    'Head over to the **Build section**': 'Head over to the **Build section**',
    Height: 'Height',
    Help: 'Help',
    'Help and guides': 'Help and guides',
    'Help for this action': 'Help for this action',
    'Help for this condition': 'Help for this condition',
    'Help page URL': 'Help page URL',
    'Help to Translate GDevelop': 'Help to Translate GDevelop',
    'Here, right-click on it and click \u201CEdit **behaviors**\u201D':
      'Here, right-click on it and click \u201CEdit **behaviors**\u201D',
    Hidden: 'Hidden',
    'Hide community behaviors (not officially reviewed)':
      'Hide community behaviors (not officially reviewed)',
    'Hide deprecated behaviors (prefer not to use anymore)':
      'Hide deprecated behaviors (prefer not to use anymore)',
    'Hide details': 'Hide details',
    'Hide layer': 'Hide layer',
    'Hide lifecycle functions (advanced)':
      'Hide lifecycle functions (advanced)',
    'Hide other lifecycle functions (advanced)':
      'Hide other lifecycle functions (advanced)',
    'Hide the layer': 'Hide the layer',
    'Hide the leaderboard': 'Hide the leaderboard',
    'Hide the menu bar in the preview window':
      'Hide the menu bar in the preview window',
    'High quality': 'High quality',
    'Higher is better': 'Higher is better',
    'Higher is better (max: {formattedScore})': function(a) {
      return ['Higher is better (max: ', a('formattedScore'), ')'];
    },
    'Highlight background color': 'Highlight background color',
    'Highlight text color': 'Highlight text color',
    Home: 'Home',
    Horror: 'Horror',
    'How did you hear about GDevelop?': 'How did you hear about GDevelop?',
    'How to export to Itch.io': 'How to export to Itch.io',
    'How to use': 'How to use',
    Huge: 'Huge',
    'I want to receive the GDevelop Newsletter':
      'I want to receive the GDevelop Newsletter',
    'I want to receive weekly stats about my games':
      'I want to receive weekly stats about my games',
    "I'll do it later": "I'll do it later",
    "I'm done": "I'm done",
    IDE: 'IDE',
    'Icon URL': 'Icon URL',
    'Icons and thumbnail': 'Icons and thumbnail',
    Identifier: 'Identifier',
    'Identifier (text)': 'Identifier (text)',
    'Identifier name': 'Identifier name',
    'If no previous condition or action used the specified object(s), the picked instances count will be 0.':
      'If no previous condition or action used the specified object(s), the picked instances count will be 0.',
    'If the parameter is a string or a number, you probably want to use the expressions "GetArgumentAsString" or "GetArgumentAsNumber", along with the conditions "Compare two strings" or "Compare two numbers".':
      'If the parameter is a string or a number, you probably want to use the expressions "GetArgumentAsString" or "GetArgumentAsNumber", along with the conditions "Compare two strings" or "Compare two numbers".',
    'If you close this window while the build is being done, you can see its progress and download the game later by clicking on See All My Builds below.':
      'If you close this window while the build is being done, you can see its progress and download the game later by clicking on See All My Builds below.',
    'If you have a popup blocker interrupting the opening, allow the popups and try a second time to open the project.':
      'If you have a popup blocker interrupting the opening, allow the popups and try a second time to open the project.',
    'If you skip this step, you can still do it manually later from the leaderboards panel in your Games Dashboard.':
      'If you skip this step, you can still do it manually later from the leaderboards panel in your Games Dashboard.',
    Ignore: 'Ignore',
    'Ignore unauthenticated player usernames':
      'Ignore unauthenticated player usernames',
    Image: 'Image',
    'Image resource': 'Image resource',
    'Image resource (JavaScript only)': 'Image resource (JavaScript only)',
    'Immerse your players by removing GDevelop logo when the game loads.':
      'Immerse your players by removing GDevelop logo when the game loads.',
    'Immerse your players by removing the GDevelop watermark or the GDevelop logo when the game loads.':
      'Immerse your players by removing the GDevelop watermark or the GDevelop logo when the game loads.',
    Import: 'Import',
    'Import extension': 'Import extension',
    'Importing project resources': 'Importing project resources',
    'Improve and publish your Game': 'Improve and publish your Game',
    'Improve background and camera': 'Improve background and camera',
    'In order to see your objects in the scene, you need to add an action "Create objects from external layout" in your events sheet.':
      'In order to see your objects in the scene, you need to add an action "Create objects from external layout" in your events sheet.',
    "In order to update these details you have to open the game's project.":
      "In order to update these details you have to open the game's project.",
    'In order to use these external events, you still need to add a "Link" event in the events sheet of the corresponding scene':
      'In order to use these external events, you still need to add a "Link" event in the events sheet of the corresponding scene',
    'In pixels.': 'In pixels.',
    'In pixels. 0 to ignore.': 'In pixels. 0 to ignore.',
    'In the future, games that generate enough revenue will be able to opt-in into "revenue share", so that as a creator you can start earning from your game sessions.':
      'In the future, games that generate enough revenue will be able to opt-in into "revenue share", so that as a creator you can start earning from your game sessions.',
    'In this tutorial you will learn:': 'In this tutorial you will learn:',
    'In-game obstacles': 'In-game obstacles',
    'Include events from': 'Include events from',
    'Included in this bundle': 'Included in this bundle',
    'Incompatible with the object': 'Incompatible with the object',
    Indonesian: 'Indonesian',
    'Initial text of the variable': 'Initial text of the variable',
    'Initial text to display': 'Initial text to display',
    Input: 'Input',
    'Insert new...': 'Insert new...',
    Inspectors: 'Inspectors',
    Instagram: 'Instagram',
    'Install again': 'Install again',
    'Install all the assets': 'Install all the assets',
    'Install in project': 'Install in project',
    'Install the missing assets': 'Install the missing assets',
    'Installed as an app. No updates available.':
      'Installed as an app. No updates available.',
    'Installing assets...': 'Installing assets...',
    Instance: 'Instance',
    'Instance Variables': 'Instance Variables',
    'Instance properties': 'Instance properties',
    'Instance variables overwrite the default values of the variables of the object.':
      'Instance variables overwrite the default values of the variables of the object.',
    'Instance variables:': 'Instance variables:',
    Instances: 'Instances',
    'Instances List': 'Instances List',
    Instant: 'Instant',
    'Instant Games': 'Instant Games',
    'Instant or permanent force': 'Instant or permanent force',
    'Intermediate course': 'Intermediate course',
    'Internal Name': 'Internal Name',
    'Invalid email address': 'Invalid email address',
    'Invalid email address.': 'Invalid email address.',
    'Invert Condition': 'Invert Condition',
    'Invert condition': 'Invert condition',
    Invite: 'Invite',
    'Invite collaborators': 'Invite collaborators',
    Isometric: 'Isometric',
    'It is free and you will get access to online services: cloud projects, leaderboards, player feedbacks, cloud builds...':
      'It is free and you will get access to online services: cloud projects, leaderboards, player feedbacks, cloud builds...',
    'It is included in the bundle {0}.': function(a) {
      return ['It is included in the bundle ', a('0'), '.'];
    },
    'It is now choosing objects from the asset store...':
      'It is now choosing objects from the asset store...',
    'It is now placing everything in the scene...':
      'It is now placing everything in the scene...',
    'It looks like the build has timed out, please try again.':
      'It looks like the build has timed out, please try again.',
    'It seems you entered a name with a quote. Variable names should not be quoted.':
      'It seems you entered a name with a quote. Variable names should not be quoted.',
    "It will disappear from your games dashboard and you won't get access to analytics, unless you register it again.":
      "It will disappear from your games dashboard and you won't get access to analytics, unless you register it again.",
    "It's probably tired.": "It's probably tired.",
    Italian: 'Italian',
    Italic: 'Italic',
    'Itch.io, Poki, CrazyGames...': 'Itch.io, Poki, CrazyGames...',
    'JSON resource': 'JSON resource',
    'JSON resource (JavaScript only)': 'JSON resource (JavaScript only)',
    Japanese: 'Japanese',
    'Join the conversation': 'Join the conversation',
    'Joystick for touchscreens.': 'Joystick for touchscreens.',
    Json: 'Json',
    'Jump forward in time on creation (in seconds)':
      'Jump forward in time on creation (in seconds)',
    'Just a few seconds while we generate the link...':
      'Just a few seconds while we generate the link...',
    'Just now': 'Just now',
    'Keep model material': 'Keep model material',
    'Keyboard Key (text)': 'Keyboard Key (text)',
    'Keyboard Shortcuts': 'Keyboard Shortcuts',
    'Keyboard key': 'Keyboard key',
    Kinematic: 'Kinematic',
    Korean: 'Korean',
    Label: 'Label',
    Landscape: 'Landscape',
    Language: 'Language',
    'Last edited': 'Last edited',
    'Last run collected on {0} frames.': function(a) {
      return ['Last run collected on ', a('0'), ' frames.'];
    },
    'Launch another preview in a new window':
      'Launch another preview in a new window',
    'Launch network preview over WiFi/LAN':
      'Launch network preview over WiFi/LAN',
    'Launch new preview': 'Launch new preview',
    'Launch preview with debugger and profiler':
      'Launch preview with debugger and profiler',
    Layer: 'Layer',
    'Layer (text)': 'Layer (text)',
    'Layer effect (text)': 'Layer effect (text)',
    'Layer effect name': 'Layer effect name',
    'Layer effect property (text)': 'Layer effect property (text)',
    'Layer effect property name': 'Layer effect property name',
    'Layer where instances are added by default':
      'Layer where instances are added by default',
    Layers: 'Layers',
    'Layers:': 'Layers:',
    Layouts: 'Layouts',
    'Leaderboad (text)': 'Leaderboad (text)',
    Leaderboard: 'Leaderboard',
    'Leaderboard already integrated': 'Leaderboard already integrated',
    'Leaderboard appearance': 'Leaderboard appearance',
    'Leaderboard name': 'Leaderboard name',
    'Leaderboard options': 'Leaderboard options',
    Leaderboards: 'Leaderboards',
    'Leaderboards help retain your players':
      'Leaderboards help retain your players',
    Learn: 'Learn',
    'Learn Game Development principles': 'Learn Game Development principles',
    'Learn Section': 'Learn Section',
    'Learn all the game-building mechanics of GDevelop':
      'Learn all the game-building mechanics of GDevelop',
    'Learn by doing': 'Learn by doing',
    'Learn everything about GDevelop from the ground up':
      'Learn everything about GDevelop from the ground up',
    'Learn game making': 'Learn game making',
    'Learn how to add a 3D object to your game.':
      'Learn how to add a 3D object to your game.',
    'Learn how to add a joystick to control the player.':
      'Learn how to add a joystick to control the player.',
    'Learn how to create a parallax background as well as a camera that follows the player.':
      'Learn how to create a parallax background as well as a camera that follows the player.',
    'Learn how to display the health of a player on the foreground.':
      'Learn how to display the health of a player on the foreground.',
    'Learn how to manipulate a score by adding collectibles.':
      'Learn how to manipulate a score by adding collectibles.',
    'Learn how to use a timer to count a score.':
      'Learn how to use a timer to count a score.',
    'Learn more': 'Learn more',
    'Learn more about Instant Games publication':
      'Learn more about Instant Games publication',
    'Learn more about [player authentication](https://wiki.gdevelop.io/gdevelop5/all-features/player-authentication).':
      'Learn more about [player authentication](https://wiki.gdevelop.io/gdevelop5/all-features/player-authentication).',
    'Learn more about publishing': 'Learn more about publishing',
    'Learn the basics of GDevelop and publish a first game.':
      'Learn the basics of GDevelop and publish a first game.',
    'Learn the fundamental principles of GDevelop':
      'Learn the fundamental principles of GDevelop',
    'Learn the fundamentals of the editor with our assisted tutorial.':
      'Learn the fundamentals of the editor with our assisted tutorial.',
    'Leave it empty to use the default group':
      'Leave it empty to use the default group',
    'Leave it empty to use the default group for this extension.':
      'Leave it empty to use the default group for this extension.',
    'Leave the tutorial': 'Leave the tutorial',
    'Left (primary)': 'Left (primary)',
    'Left face': 'Left face',
    'Left margin': 'Left margin',
    'Let the user select': 'Let the user select',
    'Let users select a numerical value by dragging a slider.':
      'Let users select a numerical value by dragging a slider.',
    "Let's add **what happens when the condition is met**: make $(secondObject) disappear.":
      "Let's add **what happens when the condition is met**: make $(secondObject) disappear.",
    "Let's add a 3D object to our game": "Let's add a 3D object to our game",
    "Let's add mobile controls to our game":
      "Let's add mobile controls to our game",
    "Let's choose an object from the asset store.":
      "Let's choose an object from the asset store.",
    "Let's communicate to the player the remaining health points":
      "Let's communicate to the player the remaining health points",
    "Let's create an **object**": "Let's create an **object**",
    "Let's finish your Fling Game, shall we?":
      "Let's finish your Fling Game, shall we?",
    "Let's go": "Let's go",
    "Let's go!": "Let's go!",
    "Let's improve a scoring system": "Let's improve a scoring system",
    "Let's improve the camera and the background":
      "Let's improve the camera and the background",
    "Let's make a Fling Game": "Let's make a Fling Game",
    "Let's make our character move! \uD83D\uDEF9":
      "Let's make our character move! \uD83D\uDEF9",
    "Let's now add another **object** that $(firstObject) can collect!":
      "Let's now add another **object** that $(firstObject) can collect!",
    "Let's play! \uD83C\uDFAE": "Let's play! \uD83C\uDFAE",
    "Let's see how it works! \uD83C\uDFAE":
      "Let's see how it works! \uD83C\uDFAE",
    "Let's use time to measure a score": "Let's use time to measure a score",
    'Let\u2019s add a **behavior**!': 'Let\u2019s add a **behavior**!',
    'Let\u2019s add an **event**!': 'Let\u2019s add an **event**!',
    'Level {0}': function(a) {
      return ['Level ', a('0')];
    },
    License: 'License',
    Licensing: 'Licensing',
    'Lifecycle functions (advanced)': 'Lifecycle functions (advanced)',
    'Lifecycle functions only included when extension used':
      'Lifecycle functions only included when extension used',
    'Lifecycle methods': 'Lifecycle methods',
    'Light (colored)': 'Light (colored)',
    'Light (plain)': 'Light (plain)',
    'Light object automatically put in lighting layer':
      'Light object automatically put in lighting layer',
    'Lighting settings': 'Lighting settings',
    'Limit cannot be empty, uncheck or fill a value between {extremeAllowedScoreMin} and {extremeAllowedScoreMax}.': function(
      a
    ) {
      return [
        'Limit cannot be empty, uncheck or fill a value between ',
        a('extremeAllowedScoreMin'),
        ' and ',
        a('extremeAllowedScoreMax'),
        '.',
      ];
    },
    'Limit scores': 'Limit scores',
    Line: 'Line',
    'Line color': 'Line color',
    'Linear (antialiased rendering, good for most games)':
      'Linear (antialiased rendering, good for most games)',
    'Lines length': 'Lines length',
    'Lines thickness': 'Lines thickness',
    "Links can't be used outside of a scene.":
      "Links can't be used outside of a scene.",
    'Linux (AppImage)': 'Linux (AppImage)',
    'Live preview (apply changes to the running preview)':
      'Live preview (apply changes to the running preview)',
    'Load autosave': 'Load autosave',
    'Loading screen': 'Loading screen',
    'Loading your link...': 'Loading your link...',
    'Loading your profile...': 'Loading your profile...',
    'Loading...': 'Loading...',
    Lobby: 'Lobby',
    'Locate file': 'Locate file',
    Location: 'Location',
    'Lock layer': 'Lock layer',
    'Lock position/angle in the editor': 'Lock position/angle in the editor',
    Locked: 'Locked',
    'Log in': 'zkLogin',
    'Log in to generate a project from a prompt':
      'Log in to generate a project from a prompt',
    'Log in to your account': 'Log in to your account',
    'Log-in to purchase this item': 'Log-in to purchase this item',
    Login: 'Login',
    'Login now': 'Login now',
    'Login with GDevelop': 'Login with GDevelop',
    'Logo and progress fade in delay (in seconds)':
      'Logo and progress fade in delay (in seconds)',
    'Logo and progress fade in duration (in seconds)':
      'Logo and progress fade in duration (in seconds)',
    Logout: 'Logout',
    Long: 'Long',
    'Long description': 'Long description',
    'Long press for more events': 'Long press for more events',
    'Long press for quick menu': 'Long press for quick menu',
    'Looks like the AI service is not available. Please try again later or create a project without a prompt.':
      'Looks like the AI service is not available. Please try again later or create a project without a prompt.',
    Loop: 'Loop',
    'Low quality': 'Low quality',
    'Lower is better': 'Lower is better',
    'Lower is better (min: {formattedScore})': function(a) {
      return ['Lower is better (min: ', a('formattedScore'), ')'];
    },
    'Make asynchronous': 'Make asynchronous',
    'Make complete games step by step': 'Make complete games step by step',
    'Make discoverable on gd.games': 'Make discoverable on gd.games',
    'Make private': 'Make private',
    'Make public': 'Make public',
    'Make sure to set up a light in the effects of the layer or chose "No lighting effect" - otherwise the object will appear black.':
      'Make sure to set up a light in the effects of the layer or chose "No lighting effect" - otherwise the object will appear black.',
    "Make sure to verify all your events creating objects, and optionally add an action to set the Z order back to 0 if it's important for your game. Do you want to continue (recommended)?":
      "Make sure to verify all your events creating objects, and optionally add an action to set the Z order back to 0 if it's important for your game. Do you want to continue (recommended)?",
    "Make sure you're online, have a proper internet connection and try again. If you download and use GDevelop desktop application, you can also run previews without any internet connection.":
      "Make sure you're online, have a proper internet connection and try again. If you download and use GDevelop desktop application, you can also run previews without any internet connection.",
    'Make synchronous': 'Make synchronous',
    'Make the leaderboard public': 'Make the leaderboard public',
    'Make the purpose of the property easy to understand':
      'Make the purpose of the property easy to understand',
    'Make your game discoverable on gd.games':
      'Make your game discoverable on gd.games',
    'Making "{objectOrGroupName}" global would conflict with the following scenes that have a group or an object with the same name:{0}Continue only if you know what you\'re doing.': function(
      a
    ) {
      return [
        'Making "',
        a('objectOrGroupName'),
        '" global would conflict with the following scenes that have a group or an object with the same name:',
        a('0'),
        "Continue only if you know what you're doing.",
      ];
    },
    'Making objects disappear or appear when colliding':
      'Making objects disappear or appear when colliding',
    'Manage game': 'Manage game',
    'Manage online': 'Manage online',
    'Manage subscription': 'Manage subscription',
    'Manual build': 'Manual build',
    'Mark all as solved': 'Mark all as solved',
    'Mark as read': 'Mark as read',
    'Mark as unread': 'Mark as unread',
    'Marketing and Advertising': 'Marketing and Advertising',
    'Maximum FPS (0 for unlimited)': 'Maximum FPS (0 for unlimited)',
    'Maximum Fps is too low': 'Maximum Fps is too low',
    'Maximum emitter force applied on particles':
      'Maximum emitter force applied on particles',
    'Maximum number of particles displayed':
      'Maximum number of particles displayed',
    'Maximum score': 'Maximum score',
    'Maybe later': 'Maybe later',
    'Mean played time': 'Mean played time',
    'Measurement unit': 'Measurement unit',
    Medium: 'Medium',
    'Medium quality': 'Medium quality',
    'Middle (Auxiliary button, usually the wheel button)':
      'Middle (Auxiliary button, usually the wheel button)',
    Minimize: 'Minimize',
    'Minimum FPS': 'Minimum FPS',
    'Minimum Fps is too low': 'Minimum Fps is too low',
    'Minimum duration of the screen (in seconds)':
      'Minimum duration of the screen (in seconds)',
    'Minimum emitter force applied on particles':
      'Minimum emitter force applied on particles',
    'Minimum score': 'Minimum score',
    'Missing some contributions? If you are the author, create a Pull Request on the corresponding GitHub repository after adding your username in the authors of the example or the extension - or directly ask the original author to add your username.':
      'Missing some contributions? If you are the author, create a Pull Request on the corresponding GitHub repository after adding your username in the authors of the example or the extension - or directly ask the original author to add your username.',
    Mobile: 'Mobile',
    'Mobile builds': 'Mobile builds',
    'Mobile portrait': 'Mobile portrait',
    'Model origin': 'Model origin',
    'Modify and publish it like a traditional GDevelop game':
      'Modify and publish it like a traditional GDevelop game',
    Modifying: 'Modifying',
    Monetization: 'Monetization',
    Month: 'Month',
    'Most browsers will require the user to have interacted with your game before allowing any video to play. Make sure that the player click/touch the screen at the beginning of the game before starting any video.':
      'Most browsers will require the user to have interacted with your game before allowing any video to play. Make sure that the player click/touch the screen at the beginning of the game before starting any video.',
    'Most monitors have a refresh rate of 60 FPS. Setting a maximum number of FPS under 60 will force the game to skip frames, and the real number of FPS will be way below 60, making the game laggy and impacting the gameplay negatively. Consider putting 60 or more for the maximum number or FPS, or disable it by setting 0.':
      'Most monitors have a refresh rate of 60 FPS. Setting a maximum number of FPS under 60 will force the game to skip frames, and the real number of FPS will be way below 60, making the game laggy and impacting the gameplay negatively. Consider putting 60 or more for the maximum number or FPS, or disable it by setting 0.',
    'Mouse button': 'Mouse button',
    'Mouse button (text)': 'Mouse button (text)',
    'Move Events into a Group': 'Move Events into a Group',
    'Move down': 'Move down',
    'Move events into a new group': 'Move events into a new group',
    'Move objects': 'Move objects',
    'Move objects from layer {0} to:': function(a) {
      return ['Move objects from layer ', a('0'), ' to:'];
    },
    'Move up': 'Move up',
    Movement: 'Movement',
    Multiplayer: 'Multiplayer',
    'Multiple files, saved in folder next to the main file':
      'Multiple files, saved in folder next to the main file',
    'Multiple frames': 'Multiple frames',
    'Multiple states': 'Multiple states',
    'Multitouch Joystick': 'Multitouch Joystick',
    'Musics will only be played if the user has interacted with the game before (by clicking/touching it or pressing a key on the keyboard). This is due to browser limitations. Make sure to have the user interact with the game before using this action.':
      'Musics will only be played if the user has interacted with the game before (by clicking/touching it or pressing a key on the keyboard). This is due to browser limitations. Make sure to have the user interact with the game before using this action.',
    'My Profile': 'My Profile',
    'My manual save': 'My manual save',
    'My online services subscription': 'My online services subscription',
    'My profile': 'My profile',
    'My projects': 'My projects',
    'NEW! Generate a pre-made AI scene with assets.':
      'NEW! Generate a pre-made AI scene with assets.',
    NPM: 'NPM',
    Name: 'Name',
    'Name displayed in editor': 'Name displayed in editor',
    'Name of the external layout': 'Name of the external layout',
    'Near plane distance': 'Near plane distance',
    'Nearest (no antialiasing, good for pixel perfect games)':
      'Nearest (no antialiasing, good for pixel perfect games)',
    'Need more power? You can upgrade to a new plan to increase the limit!':
      'Need more power? You can upgrade to a new plan to increase the limit!',
    Network: 'Network',
    Never: 'Never',
    'New Project': 'New Project',
    'New empty project...': 'New empty project...',
    'New extension name': 'New extension name',
    'New file name': 'New file name',
    'New group name': 'New group name',
    'New object': 'New object',
    'New object from scratch': 'New object from scratch',
    'New project from template...': 'New project from template...',
    'New project generation from prompt warning':
      'New project generation from prompt warning',
    'New resource': 'New resource',
    'News and announcements': 'News and announcements',
    'Next actions (and sub-events) will wait for this action to be finished before running.':
      'Next actions (and sub-events) will wait for this action to be finished before running.',
    'Next page': 'Next page',
    No: 'No',
    'No GDevelop user with this email can be found.':
      'No GDevelop user with this email can be found.',
    'No bio defined.': 'No bio defined.',
    'No changes to the game size': 'No changes to the game size',
    'No children': 'No children',
    'No custom prefix for auto-generated player names':
      'No custom prefix for auto-generated player names',
    'No description set.': 'No description set.',
    'No entries': 'No entries',
    'No filters in this category.': 'No filters in this category.',
    'No information about available updates.':
      'No information about available updates.',
    'No inspector, choose another element in the list or toggle the raw data view.':
      'No inspector, choose another element in the list or toggle the raw data view.',
    'No leaderboard chosen': 'No leaderboard chosen',
    'No leaderboards': 'No leaderboards',
    'No lighting effect': 'No lighting effect',
    'No link defined.': 'No link defined.',
    'No new animation': 'No new animation',
    'No options': 'No options',
    'No parameters for this function.': 'No parameters for this function.',
    'No preview running. Run a preview and you will be able to inspect it with the debugger':
      'No preview running. Run a preview and you will be able to inspect it with the debugger',
    'No projects yet.': 'No projects yet.',
    'No properties for this object. Add one to store data inside this object (for example: health, ammo, speed, etc...)':
      'No properties for this object. Add one to store data inside this object (for example: health, ammo, speed, etc...)',
    'No result': 'No result',
    'No results': 'No results',
    'No results found. The search is only available in English at the moment.':
      'No results found. The search is only available in English at the moment.',
    'No results returned for your search. Try something else or typing at least 2 characters.':
      'No results returned for your search. Try something else or typing at least 2 characters.',
    'No results returned for your search. Try something else, browse the categories or create your object from scratch!':
      'No results returned for your search. Try something else, browse the categories or create your object from scratch!',
    'No shortcut': 'No shortcut',
    'No similar asset was found.': 'No similar asset was found.',
    'No tags': 'No tags',
    'No tags - add a tag to an object first':
      'No tags - add a tag to an object first',
    'No thumbnail set': 'No thumbnail set',
    'No username': 'No username',
    'No, close project': 'No, close project',
    None: 'None',
    'Not compatible': 'Not compatible',
    'Not installed as an app. No updates available.':
      'Not installed as an app. No updates available.',
    'Not now, thanks!': 'Not now, thanks!',
    'Not on mobile': 'Not on mobile',
    'Not visible': 'Not visible',
    'Not visible on gd.games': 'Not visible on gd.games',
    'Note that the distinction between what is a mobile device and what is not is becoming blurry (with devices like iPad pro and other "desktop-class" tablets). If you use this for mobile controls, prefer to check if the device has touchscreen support.':
      'Note that the distinction between what is a mobile device and what is not is becoming blurry (with devices like iPad pro and other "desktop-class" tablets). If you use this for mobile controls, prefer to check if the device has touchscreen support.',
    "Note that this option will only have an effect when saving your project on your computer's filesystem from the desktop app. Read about [using Git or GitHub with projects in multiple files](https://wiki.gdevelop.io/gdevelop5/tutorials/using-github-desktop/).":
      "Note that this option will only have an effect when saving your project on your computer's filesystem from the desktop app. Read about [using Git or GitHub with projects in multiple files](https://wiki.gdevelop.io/gdevelop5/tutorials/using-github-desktop/).",
    'Note: write _PARAMx_ for parameters, e.g: Flash _PARAM1_ for 5 seconds':
      'Note: write _PARAMx_ for parameters, e.g: Flash _PARAM1_ for 5 seconds',
    'Nothing corresponding to your search. Choose an object first or browse the list of actions/conditions.':
      'Nothing corresponding to your search. Choose an object first or browse the list of actions/conditions.',
    'Nothing corresponding to your search. Try browsing the list instead.':
      'Nothing corresponding to your search. Try browsing the list instead.',
    'Nothing more is needed!': 'Nothing more is needed!',
    "Now let's make $(firstObject) collect the $(secondObject)! Go to the **events** tab of the **scene**.":
      "Now let's make $(firstObject) collect the $(secondObject)! Go to the **events** tab of the **scene**.",
    Number: 'Number',
    'Number between 0 and 1': 'Number between 0 and 1',
    'Number of entries to display': 'Number of entries to display',
    'Number of particles in tank (-1 for infinite)':
      'Number of particles in tank (-1 for infinite)',
    'Number of seats': 'Number of seats',
    OK: 'OK',
    Object: 'Object',
    'Object Groups': 'Object Groups',
    'Object Name': 'Object Name',
    'Object Variables': 'Object Variables',
    'Object animation (text)': 'Object animation (text)',
    'Object animation name': 'Object animation name',
    'Object center': 'Object center',
    'Object effect (text)': 'Object effect (text)',
    'Object effect name': 'Object effect name',
    'Object effect property (text)': 'Object effect property (text)',
    'Object effect property name': 'Object effect property name',
    'Object filters': 'Object filters',
    'Object functions': 'Object functions',
    'Object groups': 'Object groups',
    'Object name': 'Object name',
    'Object on which this behavior can be used':
      'Object on which this behavior can be used',
    'Object point (text)': 'Object point (text)',
    'Object point name': 'Object point name',
    'Object tags': 'Object tags',
    'Object type': 'Object type',
    'Object variable': 'Object variable',
    Objects: 'Objects',
    'Objects and characters': 'Objects and characters',
    'Objects created using events on this layer will be given a "Z order" of {0}, so that they appear in front of all objects of this layer. You can change this using the action to change an object Z order, after using an action to create it.': function(
      a
    ) {
      return [
        'Objects created using events on this layer will be given a "Z order" of ',
        a('0'),
        ', so that they appear in front of all objects of this layer. You can change this using the action to change an object Z order, after using an action to create it.',
      ];
    },
    'Objects groups': 'Objects groups',
    'Objects on {0}': function(a) {
      return ['Objects on ', a('0')];
    },
    'Objects or groups being directly referenced in the events: {0}': function(
      a
    ) {
      return [
        'Objects or groups being directly referenced in the events: ',
        a('0'),
      ];
    },
    'Oh no! Your subscription from the redemption code has expired. You can renew it by redeeming a new code or getting a new subscription.':
      'Oh no! Your subscription from the redemption code has expired. You can renew it by redeeming a new code or getting a new subscription.',
    'Oh. We lost contact with the AI.': 'Oh. We lost contact with the AI.',
    Ok: 'Ok',
    'Old, legacy upload key (only if you used to publish your game as an APK and already activated Play App Signing)':
      'Old, legacy upload key (only if you used to publish your game as an APK and already activated Play App Signing)',
    Omit: 'Omit',
    'On game page only': 'On game page only',
    "Once you're done testing, close the **preview** and come back here.":
      "Once you're done testing, close the **preview** and come back here.",
    "Once you're done, close this dialog and start adding some functions to the behavior. Then, test the behavior by adding it to an object in a scene.":
      "Once you're done, close this dialog and start adding some functions to the behavior. Then, test the behavior by adding it to an object in a scene.",
    "Once you're done, close this dialog and start adding some functions to the object. Then, test the object by adding to a scene.":
      "Once you're done, close this dialog and start adding some functions to the object. Then, test the object by adding to a scene.",
    "Once you're done, come back to GDevelop and the assets will be added to your account automatically.":
      "Once you're done, come back to GDevelop and the assets will be added to your account automatically.",
    "Once you're done, come back to GDevelop and the game template will be added to your account automatically.":
      "Once you're done, come back to GDevelop and the game template will be added to your account automatically.",
    "Once you're done, come back to GDevelop and your account will be upgraded automatically, unlocking the extra exports and online services.":
      "Once you're done, come back to GDevelop and your account will be upgraded automatically, unlocking the extra exports and online services.",
    'Only best entry': 'Only best entry',
    'Only cloud projects can be displayed here. If the user has created local projects, they need to be saved as cloud projects to be visible.':
      'Only cloud projects can be displayed here. If the user has created local projects, they need to be saved as cloud projects to be visible.',
    "Only player's best entries are displayed.":
      "Only player's best entries are displayed.",
    Open: 'Open',
    'Open Debugger': 'Open Debugger',
    'Open Instances List Panel': 'Open Instances List Panel',
    'Open Layers Panel': 'Open Layers Panel',
    'Open My Games Dashboard': 'Open My Games Dashboard',
    'Open My Profile': 'Open My Profile',
    'Open Object Groups Panel': 'Open Object Groups Panel',
    'Open Objects Panel': 'Open Objects Panel',
    'Open Properties Panel': 'Open Properties Panel',
    'Open Recent': 'Open Recent',
    'Open a new project? Any changes that have not been saved will be lost.':
      'Open a new project? Any changes that have not been saved will be lost.',
    'Open a project': 'Open a project',
    'Open advanced settings': 'Open advanced settings',
    'Open build link': 'Open build link',
    'Open command palette': 'Open command palette',
    'Open details': 'Open details',
    'Open extension settings': 'Open extension settings',
    'Open extension...': 'Open extension...',
    'Open external events...': 'Open external events...',
    'Open external layout...': 'Open external layout...',
    'Open file': 'Open file',
    'Open folder': 'Open folder',
    'Open in a larger editor': 'Open in a larger editor',
    'Open in a new tab': 'Open in a new tab',
    'Open in browser': 'Open in browser',
    'Open in editor': 'Open in editor',
    'Open in the web-app': 'Open in the web-app',
    'Open project': 'Open project',
    'Open project icons': 'Open project icons',
    'Open project manager': 'Open project manager',
    'Open project properties': 'Open project properties',
    'Open project resources': 'Open project resources',
    'Open recent project...': 'Open recent project...',
    'Open resource in browser': 'Open resource in browser',
    'Open scene events': 'Open scene events',
    'Open scene properties': 'Open scene properties',
    'Open scene variables': 'Open scene variables',
    'Open scene...': 'Open scene...',
    'Open settings': 'Open settings',
    'Open template': 'Open template',
    'Open the console': 'Open the console',
    'Open the exported game folder': 'Open the exported game folder',
    'Open the performance profiler': 'Open the performance profiler',
    'Open the project': 'Open the project',
    'Open the project folder': 'Open the project folder',
    'Open the properties panel': 'Open the properties panel',
    'Open...': 'Open...',
    'Opening portal': 'Opening portal',
    'Operation not allowed': 'Operation not allowed',
    Operator: 'Operator',
    'Optimize for Pixel Art': 'Optimize for Pixel Art',
    'Optional animation name': 'Optional animation name',
    'Optionally, explain the purpose of the property in more details':
      'Optionally, explain the purpose of the property in more details',
    Options: 'Options',
    'Or flash this QR code:': 'Or flash this QR code:',
    'Organize students per classroom.': 'Organize students per classroom.',
    Origin: 'Origin',
    Other: 'Other',
    'Other actions': 'Other actions',
    'Other conditions': 'Other conditions',
    'Other lifecycle methods': 'Other lifecycle methods',
    'Outdated extension': 'Outdated extension',
    'Outline color': 'Outline color',
    'Outline opacity (0-255)': 'Outline opacity (0-255)',
    'Outline size (in pixels)': 'Outline size (in pixels)',
    'Overriding the ID may have unwanted consequences, such as blocking the ability to connect to any peer. Do not use this feature unless you really know what you are doing.':
      'Overriding the ID may have unwanted consequences, such as blocking the ability to connect to any peer. Do not use this feature unless you really know what you are doing.',
    Overwrite: 'Overwrite',
    Owned: 'Owned',
    Owner: 'Owner',
    Owners: 'Owners',
    'P2P is a peer-to-peer networking solution. It leaks IP addresses to other players - it is made to play with friends, and is not suitable for playing with unknown players.\nP2P also only allows to exchange messages and leaves implementation of higher-level tasks, such as synchronizing the game state, to you. Use the THNK Framework if you seek an easier, more performant and more flexible solution suitable for playing with strangers.':
      'P2P is a peer-to-peer networking solution. It leaks IP addresses to other players - it is made to play with friends, and is not suitable for playing with unknown players.\nP2P also only allows to exchange messages and leaves implementation of higher-level tasks, such as synchronizing the game state, to you. Use the THNK Framework if you seek an easier, more performant and more flexible solution suitable for playing with strangers.',
    'Pack sounds': 'Pack sounds',
    'Pack type': 'Pack type',
    'Package game files': 'Package game files',
    'Package name (for iOS and Android)': 'Package name (for iOS and Android)',
    Packaging: 'Packaging',
    'Packaging your game for Android will create an APK file that can be installed on Android phones or an Android App Bundle that can be published to Google Play.':
      'Packaging your game for Android will create an APK file that can be installed on Android phones or an Android App Bundle that can be published to Google Play.',
    'Panel sprite': 'Panel sprite',
    'Panel sprite button': 'Panel sprite button',
    'Panel sprites': 'Panel sprites',
    'Parameter #{0}:': function(a) {
      return ['Parameter #', a('0'), ':'];
    },
    'Parameter name': 'Parameter name',
    Parameters: 'Parameters',
    'Particle emitters': 'Particle emitters',
    'Particle end size (in percents)': 'Particle end size (in percents)',
    'Particle maximum lifetime (in seconds)':
      'Particle maximum lifetime (in seconds)',
    'Particle maximum rotation speed (degrees/second)':
      'Particle maximum rotation speed (degrees/second)',
    'Particle minimum lifetime (in seconds)':
      'Particle minimum lifetime (in seconds)',
    'Particle minimum rotation speed (degrees/second)':
      'Particle minimum rotation speed (degrees/second)',
    'Particle start size (in percents)': 'Particle start size (in percents)',
    'Particle type': 'Particle type',
    'Particles end color': 'Particles end color',
    'Particles start color': 'Particles start color',
    'Particles start height': 'Particles start height',
    'Particles start width': 'Particles start width',
    Password: 'Password',
    Paste: 'Paste',
    'Paste action(s)': 'Paste action(s)',
    'Paste and Match Style': 'Paste and Match Style',
    'Paste condition(s)': 'Paste condition(s)',
    'Paste {clipboardObjectName}': function(a) {
      return ['Paste ', a('clipboardObjectName')];
    },
    'Paste {clipboardObjectName} as a Global Object': function(a) {
      return ['Paste ', a('clipboardObjectName'), ' as a Global Object'];
    },
    Pause: 'Pause',
    'Pause the game (from the toolbar) or hit refresh (on the left) to inspect the game':
      'Pause the game (from the toolbar) or hit refresh (on the left) to inspect the game',
    'Peer to peer IP address leak warning/THNK recommendation':
      'Peer to peer IP address leak warning/THNK recommendation',
    'Peer to peer data-loss notice': 'Peer to peer data-loss notice',
    'Per month': 'Per month',
    'Per year': 'Per year',
    Permanent: 'Permanent',
    Personal: 'Personal',
    'Personal projects': 'Personal projects',
    'Personal website, itch.io page, etc.':
      'Personal website, itch.io page, etc.',
    'Pixel size': 'Pixel size',
    'Place a few $(secondObject) in the scene by dragging them to the canvas.':
      'Place a few $(secondObject) in the scene by dragging them to the canvas.',
    'Platform default': 'Platform default',
    Platformer: 'Platformer',
    Play: 'Play',
    'Play!': 'Play!',
    'Playable on mobile': 'Playable on mobile',
    'Playable with a gamepad': 'Playable with a gamepad',
    'Playable with a keyboard': 'Playable with a keyboard',
    'Played > 10 minutes': 'Played > 10 minutes',
    'Played > 15 minutes': 'Played > 15 minutes',
    'Played > 3 minutes': 'Played > 3 minutes',
    'Played > 5 minutes': 'Played > 5 minutes',
    'Played time': 'Played time',
    Player: 'Player',
    'Player best entry': 'Player best entry',
    Players: 'Players',
    Playground: 'Playground',
    "Please <0>backup your game file</0> and save your game to ensure that you don't lose anything.":
      "Please <0>backup your game file</0> and save your game to ensure that you don't lose anything.",
    'Please check your internet connection or try again later.':
      'Please check your internet connection or try again later.',
    'Please double check online the changes to make sure that you are aware of anything new in this version that would require you to adapt your project.':
      'Please double check online the changes to make sure that you are aware of anything new in this version that would require you to adapt your project.',
    'Please enter a name for your project.':
      'Please enter a name for your project.',
    'Please enter a name that is at least one character long and 50 at most.':
      'Please enter a name that is at least one character long and 50 at most.',
    'Please enter a valid URL, starting with https://':
      'Please enter a valid URL, starting with https://',
    'Please enter a valid URL, starting with https://discord':
      'Please enter a valid URL, starting with https://discord',
    'Please get a subscription to keep GDevelop running.':
      'Please get a subscription to keep GDevelop running.',
    'Please get in touch with us to find a solution.':
      'Please get in touch with us to find a solution.',
    'Please log out and log in again to verify your identify, then change your email.':
      'Please log out and log in again to verify your identify, then change your email.',
    'Please note that your device should be connected on the same network as this computer.':
      'Please note that your device should be connected on the same network as this computer.',
    'Please pick a short username with only alphanumeric characters as well as _ and -':
      'Please pick a short username with only alphanumeric characters as well as _ and -',
    'Please prefer using the new action "Enforce camera boundaries" which is more flexible.':
      'Please prefer using the new action "Enforce camera boundaries" which is more flexible.',
    'Please wait while we scan your project to find a solution.':
      'Please wait while we scan your project to find a solution.',
    'Please wait...': 'Please wait...',
    'Point name': 'Point name',
    Points: 'Points',
    Polish: 'Polish',
    Polygon: 'Polygon',
    'Polygon is not convex!': 'Polygon is not convex!',
    'Polygon with {verticesCount} vertices': function(a) {
      return ['Polygon with ', a('verticesCount'), ' vertices'];
    },
    Portrait: 'Portrait',
    Portuguese: 'Portuguese',
    'Prefabs (Ready-to-use Objects)': 'Prefabs (Ready-to-use Objects)',
    Preferences: 'Preferences',
    Prefix: 'Prefix',
    Premium: 'Premium',
    'Prepare your game for Facebook Instant Games so that it can be play on Facebook Messenger. GDevelop will create a compressed file that you can upload on your Facebook Developer account.':
      'Prepare your game for Facebook Instant Games so that it can be play on Facebook Messenger. GDevelop will create a compressed file that you can upload on your Facebook Developer account.',
    'Preparing the leaderboard for your game...':
      'Preparing the leaderboard for your game...',
    'Press a shortcut combination...': 'Press a shortcut combination...',
    'Prevent selection in the editor': 'Prevent selection in the editor',
    Preview: 'Preview',
    'Preview over wifi': 'Preview over wifi',
    'Preview {animationName}': function(a) {
      return ['Preview ', a('animationName')];
    },
    'Previous page': 'Previous page',
    'Processing...': 'Processing...',
    'Professional projects': 'Professional projects',
    Profiler: 'Profiler',
    'Progress bar': 'Progress bar',
    'Progress bar color': 'Progress bar color',
    'Progress bar fade in delay and duration will be applied to GDevelop logo.':
      'Progress bar fade in delay and duration will be applied to GDevelop logo.',
    'Progress bar height': 'Progress bar height',
    'Progress bar maximum width': 'Progress bar maximum width',
    'Progress bar minimum width': 'Progress bar minimum width',
    'Progress bar width': 'Progress bar width',
    'Progress fade in delay (in seconds)':
      'Progress fade in delay (in seconds)',
    'Progress fade in duration (in seconds)':
      'Progress fade in duration (in seconds)',
    Project: 'Project',
    'Project Manager': 'Project Manager',
    'Project file type': 'Project file type',
    'Project files': 'Project files',
    'Project icons': 'Project icons',
    'Project name': 'Project name',
    'Project name cannot be empty.': 'Project name cannot be empty.',
    'Project name changed': 'Project name changed',
    'Project package names should not begin with com.example':
      'Project package names should not begin with com.example',
    'Project properly saved': 'Project properly saved',
    'Project saved': 'Project saved',
    'Project was modified': 'Project was modified',
    Properties: 'Properties',
    'Properties store data inside behaviors.':
      'Properties store data inside behaviors.',
    'Property name in events: `{parameterName}`': function(a) {
      return ['Property name in events: `', a('parameterName'), '`'];
    },
    Props: 'Props',
    Public: 'Public',
    'Public on gd.games': 'Public on gd.games',
    Publish: 'Publish',
    'Publish any number of games': 'Publish any number of games',
    'Publish this build on gd.games': 'Publish this build on gd.games',
    'Publish without saving project': 'Publish without saving project',
    'Publish your game on CrazyGames.com':
      'Publish your game on CrazyGames.com',
    'Publish your game on Game Jolt': 'Publish your game on Game Jolt',
    'Publish your game on Itch.io': 'Publish your game on Itch.io',
    'Publish your game on Kongregate': 'Publish your game on Kongregate',
    'Publish your game on Poki.com': 'Publish your game on Poki.com',
    'Publisher name': 'Publisher name',
    Puzzle: 'Puzzle',
    Quadrilateral: 'Quadrilateral',
    'Quick search': 'Quick search',
    'Quit tutorial': 'Quit tutorial',
    'R;G;B, like 100;200;180': 'R;G;B, like 100;200;180',
    RPG: 'RPG',
    Racing: 'Racing',
    'Radius of the emitter': 'Radius of the emitter',
    'Re-install': 'Re-install',
    'React to lights': 'React to lights',
    'Read & Write': 'Read & Write',
    'Read more': 'Read more',
    'Read only': 'Read only',
    'Read the doc': 'Read the doc',
    'Read the wiki page for more info about the dataloss mode.':
      'Read the wiki page for more info about the dataloss mode.',
    'Read tutorial': 'Read tutorial',
    'Ready to publish on mobile, web or desktop':
      'Ready to publish on mobile, web or desktop',
    'Ready-made': 'Ready-made',
    'Receive weekly stats about your game by email!':
      'Receive weekly stats about your game by email!',
    Reddit: 'Reddit',
    Redeem: 'Redeem',
    'Redeem a code': 'Redeem a code',
    'Redemption code': 'Redemption code',
    'Redistribution & reselling': 'Redistribution & reselling',
    Redo: 'Redo',
    'Redo the last changes': 'Redo the last changes',
    'Refine your search with more specific keyword to see them.':
      'Refine your search with more specific keyword to see them.',
    Refresh: 'Refresh',
    'Refresh dashboard': 'Refresh dashboard',
    Register: 'Register',
    'Register or publish your game first to see its exports.':
      'Register or publish your game first to see its exports.',
    'Register the project': 'Register the project',
    'Related expression and condition': 'Related expression and condition',
    'Relational operator': 'Relational operator',
    'Remember that a slug must be 6 to 30 characters long and only contains letters, digits or dashes. Verify your internet connection or try again later.':
      'Remember that a slug must be 6 to 30 characters long and only contains letters, digits or dashes. Verify your internet connection or try again later.',
    Remove: 'Remove',
    'Remove all tags': 'Remove all tags',
    'Remove collaborator': 'Remove collaborator',
    'Remove entry': 'Remove entry',
    'Remove from list': 'Remove from list',
    'Remove objects': 'Remove objects',
    'Remove resources with invalid path': 'Remove resources with invalid path',
    'Remove shortcut': 'Remove shortcut',
    'Remove the Long Description': 'Remove the Long Description',
    'Remove the animation': 'Remove the animation',
    'Remove the sprite': 'Remove the sprite',
    'Remove unused...': 'Remove unused...',
    Rename: 'Rename',
    'Rename the selected object': 'Rename the selected object',
    'Rendering type': 'Rendering type',
    'Repeat borders and center textures (instead of stretching them)':
      'Repeat borders and center textures (instead of stretching them)',
    'Repeat for each instance of {objectName}:': function(a) {
      return ['Repeat for each instance of ', a('objectName'), ':'];
    },
    'Repeat these:': 'Repeat these:',
    'Repeat {expression} times:': function(a) {
      return ['Repeat ', a('expression'), ' times:'];
    },
    Replace: 'Replace',
    'Replace existing extension': 'Replace existing extension',
    Replay: 'Replay',
    'Report a wrong translation': 'Report a wrong translation',
    'Report an issue': 'Report an issue',
    'Report anyway': 'Report anyway',
    'Report the issue on GitHub': 'Report the issue on GitHub',
    'Required behavior': 'Required behavior',
    Reset: 'Reset',
    'Reset Debugger layout': 'Reset Debugger layout',
    'Reset Extension Editor layout': 'Reset Extension Editor layout',
    'Reset Resource Editor layout': 'Reset Resource Editor layout',
    'Reset Scene Editor (small window) layout':
      'Reset Scene Editor (small window) layout',
    'Reset Scene Editor layout': 'Reset Scene Editor layout',
    'Reset all shortcuts to default': 'Reset all shortcuts to default',
    'Reset hidden announcements': 'Reset hidden announcements',
    'Reset hidden embedded explanations': 'Reset hidden embedded explanations',
    'Reset hidden embedded tutorials': 'Reset hidden embedded tutorials',
    'Reset leaderboard': 'Reset leaderboard',
    'Reset leaderboard {0}': function(a) {
      return ['Reset leaderboard ', a('0')];
    },
    'Reset password': 'Reset password',
    'Reset requested the {0} . Please wait a few minutes...': function(a) {
      return [
        'Reset requested the ',
        a('0'),
        ' . Please wait a few minutes...',
      ];
    },
    'Reset to automatic collision mask': 'Reset to automatic collision mask',
    'Reset to default': 'Reset to default',
    'Reset your password': 'Reset your password',
    'Resizable button with text customization.':
      'Resizable button with text customization.',
    'Resolution and rendering': 'Resolution and rendering',
    'Resource URL': 'Resource URL',
    'Resource bar (continuous)': 'Resource bar (continuous)',
    'Resource bar (separated units)': 'Resource bar (separated units)',
    'Resource file path copied to clipboard':
      'Resource file path copied to clipboard',
    'Resource name': 'Resource name',
    'Resource(s) URL(s) (one per line)': 'Resource(s) URL(s) (one per line)',
    Resources: 'Resources',
    'Resources (any kind)': 'Resources (any kind)',
    'Resources are automatically added to your project whenever you add an image, a font or a video to an object or when you choose an audio file in events. Choose a resource to display its properties.':
      'Resources are automatically added to your project whenever you add an image, a font or a video to an object or when you choose an audio file in events. Choose a resource to display its properties.',
    Restart: 'Restart',
    'Restart the Tutorial': 'Restart the Tutorial',
    'Restart tutorial': 'Restart tutorial',
    'Restarting the preview from scratch is required':
      'Restarting the preview from scratch is required',
    'Restore a previous purchase': 'Restore a previous purchase',
    Retry: 'Retry',
    'Right (secondary)': 'Right (secondary)',
    'Right face': 'Right face',
    'Right margin': 'Right margin',
    'Right-click for more events': 'Right-click for more events',
    'Right-click for quick menu': 'Right-click for quick menu',
    Rooms: 'Rooms',
    'Rotation (X)': 'Rotation (X)',
    'Rotation (Y)': 'Rotation (Y)',
    'Rotation (Z)': 'Rotation (Z)',
    'Round pixels when rendering, useful for pixel perfect games.':
      'Round pixels when rendering, useful for pixel perfect games.',
    'Round to X decimal point': 'Round to X decimal point',
    'Run a preview': 'Run a preview',
    'Run a preview (with loading & branding)':
      'Run a preview (with loading & branding)',
    'Run a preview and you will be able to inspect it with the debugger.':
      'Run a preview and you will be able to inspect it with the debugger.',
    'Run on this computer': 'Run on this computer',
    Russian: 'Russian',
    Save: 'Save',
    'Save Project': 'Save Project',
    'Save and continue': 'Save and continue',
    'Save as main version': 'Save as main version',
    'Save as...': 'Save as...',
    'Save in the "Downloads" folder': 'Save in the "Downloads" folder',
    'Save on Google Drive': 'Save on Google Drive',
    'Save project': 'Save project',
    'Save project and publish': 'Save project and publish',
    'Save project as...': 'Save project as...',
    'Save your changes or close the external editor to continue.':
      'Save your changes or close the external editor to continue.',
    'Save your project': 'Save your project',
    'Saving project': 'Saving project',
    'Saving...': 'Saving...',
    'Scale mode (also called "Sampling")':
      'Scale mode (also called "Sampling")',
    'Scan in the project folder for...': 'Scan in the project folder for...',
    'Scan missing animations': 'Scan missing animations',
    Scene: 'Scene',
    'Scene background color': 'Scene background color',
    'Scene name': 'Scene name',
    'Scene name (text)': 'Scene name (text)',
    'Scene properties': 'Scene properties',
    'Scene variable': 'Scene variable',
    Scenes: 'Scenes',
    School: 'School',
    'Schools and universities.': 'Schools and universities.',
    Scope: 'Scope',
    Score: 'Score',
    'Score column settings': 'Score column settings',
    'Score display': 'Score display',
    'Scores sort order': 'Scores sort order',
    Search: 'Search',
    'Search GDevelop wiki': 'Search GDevelop wiki',
    'Search and replace in parameters': 'Search and replace in parameters',
    'Search assets': 'Search assets',
    'Search behaviors': 'Search behaviors',
    'Search engine': 'Search engine',
    'Search examples': 'Search examples',
    'Search extensions': 'Search extensions',
    'Search for New Extensions': 'Search for New Extensions',
    'Search for new actions in extensions':
      'Search for new actions in extensions',
    'Search for new conditions in extensions':
      'Search for new conditions in extensions',
    'Search for \u201Ccoin\u201D (or a potion, food, ...).':
      'Search for \u201Ccoin\u201D (or a potion, food, ...).',
    'Search functions': 'Search functions',
    'Search in event sentences': 'Search in event sentences',
    'Search in events': 'Search in events',
    'Search in project': 'Search in project',
    'Search in:': 'Search in:',
    'Search instances': 'Search instances',
    'Search object groups': 'Search object groups',
    'Search objects': 'Search objects',
    'Search objects or actions': 'Search objects or actions',
    'Search objects or conditions': 'Search objects or conditions',
    'Search resources': 'Search resources',
    'Search variables': 'Search variables',
    'Search {searchPlaceholderObjectName} actions': function(a) {
      return ['Search ', a('searchPlaceholderObjectName'), ' actions'];
    },
    'Search {searchPlaceholderObjectName} conditions': function(a) {
      return ['Search ', a('searchPlaceholderObjectName'), ' conditions'];
    },
    'Search/import extensions': 'Search/import extensions',
    'Section name': 'Section name',
    'See all': 'See all',
    'See all exports': 'See all exports',
    'See all release notes': 'See all release notes',
    'See all the release notes': 'See all the release notes',
    'See details here': 'See details here',
    'See projects': 'See projects',
    'See the **behaviors** of your object here.':
      'See the **behaviors** of your object here.',
    'See the releases notes online': 'See the releases notes online',
    'See this bundle': 'See this bundle',
    'Select All': 'Select All',
    'Select a Layer': 'Select a Layer',
    'Select a Scene': 'Select a Scene',
    'Select a behavior or an object to display its functions.':
      'Select a behavior or an object to display its functions.',
    'Select a genre': 'Select a genre',
    'Select an Animation': 'Select an Animation',
    'Select an Effect': 'Select an Effect',
    'Select an Effect Property': 'Select an Effect Property',
    'Select an External Layout': 'Select an External Layout',
    'Select an image': 'Select an image',
    'Select instances on scene ({instanceCountOnScene})': function(a) {
      return ['Select instances on scene (', a('instanceCountOnScene'), ')'];
    },
    'Select log groups to display': 'Select log groups to display',
    'Select one': 'Select one',
    'Select the leaderboard from a list': 'Select the leaderboard from a list',
    'Select the usernames of the authors of this project. They will be displayed in the selected order, if you publish this game as an example or in the community.':
      'Select the usernames of the authors of this project. They will be displayed in the selected order, if you publish this game as an example or in the community.',
    'Select the usernames of the contributors to this extension. They will be displayed in the order selected. Do not see your name? Go to the Profile section and create an account!':
      'Select the usernames of the contributors to this extension. They will be displayed in the order selected. Do not see your name? Go to the Profile section and create an account!',
    'Select the usernames of the owners of this project to let them manage this game builds. Be aware that owners can revoke your ownership.':
      'Select the usernames of the owners of this project to let them manage this game builds. Be aware that owners can revoke your ownership.',
    "Select up to 3 genres for the game to be visible on gd.games's categories pages!":
      "Select up to 3 genres for the game to be visible on gd.games's categories pages!",
    'Send it again': 'Send it again',
    'Send to back': 'Send to back',
    'Sentence in Events Sheet': 'Sentence in Events Sheet',
    'Sentence in Events Sheet (automatically suffixed by "of _PARAM0_")':
      'Sentence in Events Sheet (automatically suffixed by "of _PARAM0_")',
    'Service seems to be unavailable, please try again later.':
      'Service seems to be unavailable, please try again later.',
    'Set as default': 'Set as default',
    'Set as global group': 'Set as global group',
    'Set as global object': 'Set as global object',
    'Set as start scene': 'Set as start scene',
    'Set shortcut': 'Set shortcut',
    'Set to false': 'Set to false',
    'Set to true': 'Set to true',
    'Set up new leaderboards for this game':
      'Set up new leaderboards for this game',
    'Setting the minimum number of FPS below 20 will increase a lot the time that is allowed between the simulation of two frames of the game. If case of a sudden slowdown, or on slow computers, this can create buggy behaviors like objects passing beyond a wall. Consider setting 20 as the minimum FPS.':
      'Setting the minimum number of FPS below 20 will increase a lot the time that is allowed between the simulation of two frames of the game. If case of a sudden slowdown, or on slow computers, this can create buggy behaviors like objects passing beyond a wall. Consider setting 20 as the minimum FPS.',
    Settings: 'Settings',
    'Setup grid': 'Setup grid',
    Share: 'Share',
    'Share same collision masks for all animations':
      'Share same collision masks for all animations',
    'Share same collision masks for all sprites of this animation':
      'Share same collision masks for all sprites of this animation',
    'Share same points for all animations':
      'Share same points for all animations',
    'Share same points for all sprites of this animation':
      'Share same points for all sprites of this animation',
    'Share your game': 'Share your game',
    'Sharing online': 'Sharing online',
    Shooter: 'Shooter',
    Shop: 'Shop',
    Short: 'Short',
    'Short description': 'Short description',
    'Short label': 'Short label',
    'Should finish soon.': 'Should finish soon.',
    Show: 'Show',
    'Show Home': 'Show Home',
    'Show Mask': 'Show Mask',
    'Show Project Manager': 'Show Project Manager',
    'Show Properties Names': 'Show Properties Names',
    'Show a warning on deprecated actions and conditions':
      'Show a warning on deprecated actions and conditions',
    'Show advanced import options': 'Show advanced import options',
    'Show all feedbacks': 'Show all feedbacks',
    'Show community (non reviewed) extensions in the list of extensions':
      'Show community (non reviewed) extensions in the list of extensions',
    'Show community behaviors (not officially reviewed)':
      'Show community behaviors (not officially reviewed)',
    'Show community extensions (not officially reviewed)':
      'Show community extensions (not officially reviewed)',
    'Show custom objects in the extension editor (experimental)':
      'Show custom objects in the extension editor (experimental)',
    'Show deprecated behaviors (prefer not to use anymore)':
      'Show deprecated behaviors (prefer not to use anymore)',
    'Show details': 'Show details',
    'Show feedback banner on gd.games game page':
      'Show feedback banner on gd.games game page',
    'Show grid': 'Show grid',
    'Show in local folder': 'Show in local folder',
    'Show internal': 'Show internal',
    'Show layer': 'Show layer',
    'Show lifecycle functions (advanced)':
      'Show lifecycle functions (advanced)',
    'Show live assets': 'Show live assets',
    'Show objects in 3D in the scene editor':
      'Show objects in 3D in the scene editor',
    'Show other lifecycle functions (advanced)':
      'Show other lifecycle functions (advanced)',
    'Show progress bar': 'Show progress bar',
    'Show staging assets': 'Show staging assets',
    'Show unread feedback only': 'Show unread feedback only',
    'Show/Hide instance properties': 'Show/Hide instance properties',
    Showcase: 'Showcase',
    'Showing {0} of {resultsCount}': function(a) {
      return ['Showing ', a('0'), ' of ', a('resultsCount')];
    },
    'Side view': 'Side view',
    'Sign up for free!': 'Sign up for free!',
    'Signing options': 'Signing options',
    Simple: 'Simple',
    Simulation: 'Simulation',
    'Single file (default)': 'Single file (default)',
    Sinhala: 'Sinhala',
    Size: 'Size',
    'Size:': 'Size:',
    'Skip and create from scratch': 'Skip and create from scratch',
    'Skip for now': 'Skip for now',
    'Skip the update': 'Skip the update',
    Slider: 'Slider',
    Slovene: 'Slovene',
    'Small game studios and startups.': 'Small game studios and startups.',
    'Social media': 'Social media',
    'Some code based engines (Unity, Unreal Engine...)':
      'Some code based engines (Unity, Unreal Engine...)',
    'Some no-code or low-code engines': 'Some no-code or low-code engines',
    'Something wrong happened :(': 'Something wrong happened :(',
    Sorry: 'Sorry',
    'Sort by most recent': 'Sort by most recent',
    'Sort order': 'Sort order',
    Sound: 'Sound',
    'Sounds and musics': 'Sounds and musics',
    Spanish: 'Spanish',
    'Specific game mechanics': 'Specific game mechanics',
    Speech: 'Speech',
    Sport: 'Sport',
    'Spray cone angle (in degrees)': 'Spray cone angle (in degrees)',
    Sprite: 'Sprite',
    Sprites: 'Sprites',
    'Start Network Preview (Preview over WiFi/LAN)':
      'Start Network Preview (Preview over WiFi/LAN)',
    'Start Preview and Debugger': 'Start Preview and Debugger',
    'Start a timer': 'Start a timer',
    'Start all previews from external layout {0}': function(a) {
      return ['Start all previews from external layout ', a('0')];
    },
    'Start all previews from scene {0}': function(a) {
      return ['Start all previews from scene ', a('0')];
    },
    'Start next chapter': 'Start next chapter',
    'Start opacity (0-255)': 'Start opacity (0-255)',
    'Start profiling': 'Start profiling',
    'Start profiling and then stop it after a few seconds to see the results.':
      'Start profiling and then stop it after a few seconds to see the results.',
    'Start typing a command or searching something...':
      'Start typing a command or searching something...',
    'Start typing a username': 'Start typing a username',
    'Start your game': 'Start your game',
    'Starting engine': 'Starting engine',
    Static: 'Static',
    'Stay there': 'Stay there',
    'Stop music and sounds on startup': 'Stop music and sounds on startup',
    'Stop profiling': 'Stop profiling',
    'Store password': 'Store password',
    'Story-Rich': 'Story-Rich',
    Strategy: 'Strategy',
    String: 'String',
    'String (text)': 'String (text)',
    'String from a list of options (text)':
      'String from a list of options (text)',
    Structure: 'Structure',
    Student: 'Student',
    'Students anonymity.': 'Students anonymity.',
    Submit: 'Submit',
    'Submit a tutorial': 'Submit a tutorial',
    'Submit a tutorial translated in your language':
      'Submit a tutorial translated in your language',
    'Submit an example': 'Submit an example',
    'Submit objects to the community': 'Submit objects to the community',
    'Submit to the community': 'Submit to the community',
    'Submit your project as an example': 'Submit your project as an example',
    'Subscription cancelled': 'Subscription cancelled',
    'Subscription outside the app store': 'Subscription outside the app store',
    'Subscription updated': 'Subscription updated',
    'Subscription with the Apple App store or Google Play store':
      'Subscription with the Apple App store or Google Play store',
    'Subscriptions can be stopped at any time. GDevelop uses Stripe.com and PayPal for secure payment. No credit card data is stored by GDevelop: everything is managed by Stripe.com or PayPal secure infrastructure.':
      'Subscriptions can be stopped at any time. GDevelop uses Stripe.com and PayPal for secure payment. No credit card data is stored by GDevelop: everything is managed by Stripe.com or PayPal secure infrastructure.',
    Suffix: 'Suffix',
    'Supported files': 'Supported files',
    Survival: 'Survival',
    'Switch to create objects with the highest Z order of the layer':
      'Switch to create objects with the highest Z order of the layer',
    'Table settings': 'Table settings',
    Tags: 'Tags',
    'Tags (comma separated)': 'Tags (comma separated)',
    'Talking to the AI... beep boop beep boop...':
      'Talking to the AI... beep boop beep boop...',
    'Teach students the principles of Game Development and logic':
      'Teach students the principles of Game Development and logic',
    'Teaching and Training': 'Teaching and Training',
    Team: 'Team',
    'Tell us about yourself': 'Tell us about yourself',
    'Test it out!': 'Test it out!',
    'Test value': 'Test value',
    'Test value (in second)': 'Test value (in second)',
    Text: 'Text',
    'Text color': 'Text color',
    'Text color:': 'Text color:',
    'Text to replace in parameters': 'Text to replace in parameters',
    'Text to search in event sentences': 'Text to search in event sentences',
    'Text to search in parameters': 'Text to search in parameters',
    Texts: 'Texts',
    Thai: 'Thai',
    'Thank you!': 'Thank you!',
    'Thanks for getting a subscription and supporting GDevelop!':
      'Thanks for getting a subscription and supporting GDevelop!',
    "Thanks to all users of GDevelop! There must be missing tons of people, please send your name if you've contributed and you're not listed.":
      "Thanks to all users of GDevelop! There must be missing tons of people, please send your name if you've contributed and you're not listed.",
    "Thanks to the redemption code you've used, you have this subscription enabled until {0}.": function(
      a
    ) {
      return [
        "Thanks to the redemption code you've used, you have this subscription enabled until ",
        a('0'),
        '.',
      ];
    },
    'Thanks!': 'Thanks!',
    "That's a lot of unsuccessful login attempts! Wait a bit before trying again or reset your password.":
      "That's a lot of unsuccessful login attempts! Wait a bit before trying again or reset your password.",
    'The "{0}" effect can only be applied once.': function(a) {
      return ['The "', a('0'), '" effect can only be applied once.'];
    },
    'The AI has accepted your request. It is now thinking about the best way to create your game...':
      'The AI has accepted your request. It is now thinking about the best way to create your game...',
    "The URLs must be public and stay accessible while you work on this project - they won't be stored inside the project file. When exporting a game, the resources pointed by these URLs will be downloaded and stored inside the game.":
      "The URLs must be public and stay accessible while you work on this project - they won't be stored inside the project file. When exporting a game, the resources pointed by these URLs will be downloaded and stored inside the game.",
    'The animation name {newName} is already taken': function(a) {
      return ['The animation name ', a('newName'), ' is already taken'];
    },
    'The asset pack {0} will be linked to your account {1}.': function(a) {
      return [
        'The asset pack ',
        a('0'),
        ' will be linked to your account ',
        a('1'),
        '.',
      ];
    },
    'The behavior is not attached to this object. Please select another object or add this behavior.':
      'The behavior is not attached to this object. Please select another object or add this behavior.',
    'The bounding box is an imaginary rectangle surrounding the object collision mask. Even if the object X and Y positions are not changed, this rectangle can change if the object is rotated or if an animation is being played. Usually you should use actions and conditions related to the object position or center, but the bounding box can be useful to deal with the area of the object.':
      'The bounding box is an imaginary rectangle surrounding the object collision mask. Even if the object X and Y positions are not changed, this rectangle can change if the object is rotated or if an animation is being played. Usually you should use actions and conditions related to the object position or center, but the bounding box can be useful to deal with the area of the object.',
    'The custom object editor is at a very early stage. A lot of features are missing or broken. Extensions written with it may no longer work in future GDevelop releases.':
      'The custom object editor is at a very early stage. A lot of features are missing or broken. Extensions written with it may no longer work in future GDevelop releases.',
    'The description of the object should explain what the object is doing, and, briefly, how to use it.':
      'The description of the object should explain what the object is doing, and, briefly, how to use it.',
    'The effect name {newName} is already taken': function(a) {
      return ['The effect name ', a('newName'), ' is already taken'];
    },
    'The error was automatically reported.':
      'The error was automatically reported.',
    'The extension installed in this project is not up to date. Consider upgrading it before reporting any issue.':
      'The extension installed in this project is not up to date. Consider upgrading it before reporting any issue.',
    "The extension was added to the project. You can now use it in the list of actions/conditions and, if it's a behavior, in the list of behaviors for an object.":
      "The extension was added to the project. You can now use it in the list of actions/conditions and, if it's a behavior, in the list of behaviors for an object.",
    'The far plane distance must be greater than the near plan distance.':
      'The far plane distance must be greater than the near plan distance.',
    'The field of view cannot be lower than 0\xB0 or greater than 180\xB0.':
      'The field of view cannot be lower than 0\xB0 or greater than 180\xB0.',
    'The file {0} is invalid.': function(a) {
      return ['The file ', a('0'), ' is invalid.'];
    },
    'The file {0} is too large. Use files that are smaller for your game: each must be less than {1} MB.': function(
      a
    ) {
      return [
        'The file ',
        a('0'),
        ' is too large. Use files that are smaller for your game: each must be less than ',
        a('1'),
        ' MB.',
      ];
    },
    'The following file(s) cannot be used for this kind of object: {0}': function(
      a
    ) {
      return [
        'The following file(s) cannot be used for this kind of object: ',
        a('0'),
      ];
    },
    'The font size is stored directly inside the font. If you want to change it, export again your font using an external editor like bmFont. Click on the help button to learn more.':
      'The font size is stored directly inside the font. If you want to change it, export again your font using an external editor like bmFont. Click on the help button to learn more.',
    'The force will only push the object during the time of one frame. Typically used in an event with no conditions or with conditions that stay valid for a certain amount of time.':
      'The force will only push the object during the time of one frame. Typically used in an event with no conditions or with conditions that stay valid for a certain amount of time.',
    'The force will push the object forever, unless you use the action "Stop the object". Typically used in an event with conditions that are only true once, or with a "Trigger Once" condition.':
      'The force will push the object forever, unless you use the action "Stop the object". Typically used in an event with conditions that are only true once, or with a "Trigger Once" condition.',
    'The game template {0} will be linked to your account {1}.': function(a) {
      return [
        'The game template ',
        a('0'),
        ' will be linked to your account ',
        a('1'),
        '.',
      ];
    },
    'The game was properly exported. You can now use Electron Builder (you need Node.js installed and to use the command-line on your computer to run it) to create an executable.':
      'The game was properly exported. You can now use Electron Builder (you need Node.js installed and to use the command-line on your computer to run it) to create an executable.',
    "The game you're trying to open is not registered online. Open the project file, then register it before continuing.":
      "The game you're trying to open is not registered online. Open the project file, then register it before continuing.",
    'The icing on the cake': 'The icing on the cake',
    'The image should be at least 864x864px, and the logo must fit [within a circle of 576px](https://developer.android.com/guide/topics/ui/splash-screen#splash_screen_dimensions). Transparent borders are automatically added when generated to help ensuring this.':
      'The image should be at least 864x864px, and the logo must fit [within a circle of 576px](https://developer.android.com/guide/topics/ui/splash-screen#splash_screen_dimensions). Transparent borders are automatically added when generated to help ensuring this.',
    'The latest save of "{cloudProjectName}" is corrupt and cannot be opened.': function(
      a
    ) {
      return [
        'The latest save of "',
        a('cloudProjectName'),
        '" is corrupt and cannot be opened.',
      ];
    },
    'The latest save of this project is corrupt and cannot be opened.':
      'The latest save of this project is corrupt and cannot be opened.',
    'The layer {0} does not contain any object instances. Continue?': function(
      a
    ) {
      return [
        'The layer ',
        a('0'),
        ' does not contain any object instances. Continue?',
      ];
    },
    'The light object was automatically placed on the Lighting layer.':
      'The light object was automatically placed on the Lighting layer.',
    'The lighting layer renders an ambient light on the scene. All lights should be placed on this layer so that shadows are properly rendered. By default, the layer follows the base layer camera. Uncheck this if you want to manually move the camera using events.':
      'The lighting layer renders an ambient light on the scene. All lights should be placed on this layer so that shadows are properly rendered. By default, the layer follows the base layer camera. Uncheck this if you want to manually move the camera using events.',
    "The link to the asset pack you've followed seems outdated. Why not take a look at the other packs in the asset store?":
      "The link to the asset pack you've followed seems outdated. Why not take a look at the other packs in the asset store?",
    "The link to the game template you've followed seems outdated. Why not take a look at the other templates in the store?":
      "The link to the game template you've followed seems outdated. Why not take a look at the other templates in the store?",
    'The name of your game is too long': 'The name of your game is too long',
    'The name {newName} is already taken': function(a) {
      return ['The name ', a('newName'), ' is already taken'];
    },
    'The near plane distance must be strictly greater than 0 and lower than the far plan distance.':
      'The near plane distance must be strictly greater than 0 and lower than the far plan distance.',
    'The number of decimal places must be a whole value between {precisionMinValue} and {precisionMaxValue}': function(
      a
    ) {
      return [
        'The number of decimal places must be a whole value between ',
        a('precisionMinValue'),
        ' and ',
        a('precisionMaxValue'),
      ];
    },
    'The number of displayed entries must be a whole value between {displayedEntriesMinNumber} and {displayedEntriesMaxNumber}': function(
      a
    ) {
      return [
        'The number of displayed entries must be a whole value between ',
        a('displayedEntriesMinNumber'),
        ' and ',
        a('displayedEntriesMaxNumber'),
      ];
    },
    "The object does not exist or can't be used here.":
      "The object does not exist or can't be used here.",
    'The package name begins with com.example, make sure you replace it with an unique one to be able to publish your game on app stores.':
      'The package name begins with com.example, make sure you replace it with an unique one to be able to publish your game on app stores.',
    'The package name begins with com.example, make sure you replace it with an unique one, else installing your game might overwrite other games.':
      'The package name begins with com.example, make sure you replace it with an unique one, else installing your game might overwrite other games.',
    'The package name is containing invalid characters or not following the convention "xxx.yyy.zzz" (numbers allowed after a letter only).':
      'The package name is containing invalid characters or not following the convention "xxx.yyy.zzz" (numbers allowed after a letter only).',
    'The package name is empty.': 'The package name is empty.',
    'The package name is too long.': 'The package name is too long.',
    "The parameters above help you customise the **behavior**, but let's ignore them for now.":
      "The parameters above help you customise the **behavior**, but let's ignore them for now.",
    'The password is invalid.': 'The password is invalid.',
    'The password you entered is incorrect. Please try again.':
      'The password you entered is incorrect. Please try again.',
    'The player name sent in the action to send a score will be used.':
      'The player name sent in the action to send a score will be used.',
    'The polygon is not convex': 'The polygon is not convex',
    "The polygon is not convex. Ensure it is, otherwise the collision mask won't work.":
      "The polygon is not convex. Ensure it is, otherwise the collision mask won't work.",
    'The preview could not be launched because an error happened: {0}.': function(
      a
    ) {
      return [
        'The preview could not be launched because an error happened: ',
        a('0'),
        '.',
      ];
    },
    "The preview could not be launched because you're offline.":
      "The preview could not be launched because you're offline.",
    'The project could not be saved. Please try again later.':
      'The project could not be saved. Please try again later.',
    'The project currently opened is not registered online. Register it now to get access to leaderboards, player accounts, analytics and more!':
      'The project currently opened is not registered online. Register it now to get access to leaderboards, player accounts, analytics and more!',
    "The project currently opened is registered online but you don't have access to it. Ask the original owner of the game to share it with you to be able to manage it.":
      "The project currently opened is registered online but you don't have access to it. Ask the original owner of the game to share it with you to be able to manage it.",
    'The project file appears to be corrupted, but an autosave file exists (backup made automatically by GDevelop on {0}). Would you like to try to load it instead?': function(
      a
    ) {
      return [
        'The project file appears to be corrupted, but an autosave file exists (backup made automatically by GDevelop on ',
        a('0'),
        '). Would you like to try to load it instead?',
      ];
    },
    'The purchase will be linked to your account once done.':
      'The purchase will be linked to your account once done.',
    'The resource has been downloaded': 'The resource has been downloaded',
    'The sentence displays one or more wrongs parameters:':
      'The sentence displays one or more wrongs parameters:',
    'The sentence is probably missing this/these parameter(s):':
      'The sentence is probably missing this/these parameter(s):',
    'The shape used in the Physics behavior is independent from the collision mask of the object. Be sure to use the "Collision" condition provided by the Physics behavior in the events. The usual "Collision" condition won\'t take into account the shape that you\'ve set up here.':
      'The shape used in the Physics behavior is independent from the collision mask of the object. Be sure to use the "Collision" condition provided by the Physics behavior in the events. The usual "Collision" condition won\'t take into account the shape that you\'ve set up here.',
    'The specified external events do not exist in the game. Be sure that the name is correctly spelled or create them using the project manager.':
      'The specified external events do not exist in the game. Be sure that the name is correctly spelled or create them using the project manager.',
    'The subscription of this account comes from outside the app store. Connect with your account on gdevelop.io from your web-browser to manage it.':
      'The subscription of this account comes from outside the app store. Connect with your account on gdevelop.io from your web-browser to manage it.',
    'The subscription of this account was done using Apple or Google Play. Connect on your account on your Apple or Google device to manage it.':
      'The subscription of this account was done using Apple or Google Play. Connect on your account on your Apple or Google device to manage it.',
    "The text input will be always shown on top of all other objects in the game - this is a limitation that can't be changed. According to the platform/device or browser running the game, the appearance can also slightly change.":
      "The text input will be always shown on top of all other objects in the game - this is a limitation that can't be changed. According to the platform/device or browser running the game, the appearance can also slightly change.",
    'The tilemap must be designed in a separated program, Tiled, that can be downloaded on mapeditor.org. Save your map as a JSON file, then select here the Atlas image that you used and the Tile map JSON file.':
      'The tilemap must be designed in a separated program, Tiled, that can be downloaded on mapeditor.org. Save your map as a JSON file, then select here the Atlas image that you used and the Tile map JSON file.',
    'The usage of a number or expression is deprecated. Please now use only "Permanent" or "Instant" for configuring forces.':
      'The usage of a number or expression is deprecated. Please now use only "Permanent" or "Instant" for configuring forces.',
    'The variable name contains a space - this is not recommended. Prefer to use underscores or uppercase letters to separate words.':
      'The variable name contains a space - this is not recommended. Prefer to use underscores or uppercase letters to separate words.',
    "The variable name looks like you're building an expression or a formula. You can only use this for structure or arrays. For example: Score[3].":
      "The variable name looks like you're building an expression or a formula. You can only use this for structure or arrays. For example: Score[3].",
    "The version that you've set for the game is invalid.":
      "The version that you've set for the game is invalid.",
    'Then choose the **action** $(secondObject) will receive : "Delete", as we want to remove it.':
      'Then choose the **action** $(secondObject) will receive : "Delete", as we want to remove it.',
    'Then the condition we want to use: **"Collision"**.':
      'Then the condition we want to use: **"Collision"**.',
    'There are currently no leaderboards created for this game. Open the leaderboards manager to create one.':
      'There are currently no leaderboards created for this game. Open the leaderboards manager to create one.',
    'There are no objects. Objects will appear if you add some as parameters.':
      'There are no objects. Objects will appear if you add some as parameters.',
    'There are variables used in events but not declared in this list: {0}.': function(
      a
    ) {
      return [
        'There are variables used in events but not declared in this list: ',
        a('0'),
        '.',
      ];
    },
    'There are {instancesCountInLayout} object instances on this layer. Should they be moved to another layer?': function(
      a
    ) {
      return [
        'There are ',
        a('instancesCountInLayout'),
        ' object instances on this layer. Should they be moved to another layer?',
      ];
    },
    'There are {instancesCount} instances of objects on this layer.': function(
      a
    ) {
      return [
        'There are ',
        a('instancesCount'),
        ' instances of objects on this layer.',
      ];
    },
    'There is no object in your game or in this scene. Start by adding an new object in the scene editor, using the objects list.':
      'There is no object in your game or in this scene. Start by adding an new object in the scene editor, using the objects list.',
    'There is nothing to configure for this behavior. You can still use events to interact with the object and this behavior.':
      'There is nothing to configure for this behavior. You can still use events to interact with the object and this behavior.',
    'There is nothing to configure for this object. You can still use events to interact with the object.':
      'There is nothing to configure for this object. You can still use events to interact with the object.',
    'There is nothing to configure.': 'There is nothing to configure.',
    'There was an error verifying the URL(s). Please check they are correct.':
      'There was an error verifying the URL(s). Please check they are correct.',
    'There was an error while creating the object "{0}". Verify your internet connection or try again later.': function(
      a
    ) {
      return [
        'There was an error while creating the object "',
        a('0'),
        '". Verify your internet connection or try again later.',
      ];
    },
    'There was an error while installing the asset "{0}". Verify your internet connection or try again later.': function(
      a
    ) {
      return [
        'There was an error while installing the asset "',
        a('0'),
        '". Verify your internet connection or try again later.',
      ];
    },
    'There was an error while making an auto-save of the project. Verify that you have permissions to write in the project folder.':
      'There was an error while making an auto-save of the project. Verify that you have permissions to write in the project folder.',
    'There was an error while uploading some resources. Verify your internet connection or try again later.':
      'There was an error while uploading some resources. Verify your internet connection or try again later.',
    'There was an issue getting the game analytics.':
      'There was an issue getting the game analytics.',
    'There was an issue getting the game details.':
      'There was an issue getting the game details.',
    'There was an unknown error when trying to apply the code. Double check the code, try again later or contact us if this persists.':
      'There was an unknown error when trying to apply the code. Double check the code, try again later or contact us if this persists.',
    'There were errors when importing resources for the project. You can retry (recommended) or continue despite the errors. In this case, the project will be missing some resources.':
      'There were errors when importing resources for the project. You can retry (recommended) or continue despite the errors. In this case, the project will be missing some resources.',
    'There were errors when preparing new leaderboards for the project.':
      'There were errors when preparing new leaderboards for the project.',
    'There were no players or stored metrics for this period. Be sure to publish your game and get players to try it to see the collected anonymous analytics.':
      'There were no players or stored metrics for this period. Be sure to publish your game and get players to try it to see the collected anonymous analytics.',
    'These behaviors are already attached to the object:{0}Do you want to replace their property values?': function(
      a
    ) {
      return [
        'These behaviors are already attached to the object:',
        a('0'),
        'Do you want to replace their property values?',
      ];
    },
    'These effects already exist:{0}Do you want to replace them?': function(a) {
      return [
        'These effects already exist:',
        a('0'),
        'Do you want to replace them?',
      ];
    },
    'These properties already exist:{0}Do you want to replace them?': function(
      a
    ) {
      return [
        'These properties already exist:',
        a('0'),
        'Do you want to replace them?',
      ];
    },
    'These variables hold additional information on a project.':
      'These variables hold additional information on a project.',
    'These variables hold additional information on a scene.':
      'These variables hold additional information on a scene.',
    'These variables hold additional information on an object.':
      'These variables hold additional information on an object.',
    'Third editor': 'Third editor',
    'Third-party': 'Third-party',
    'This account has been deactivated or deleted.':
      'This account has been deactivated or deleted.',
    'This action is deprecated and should not be used anymore. Instead, use for all your objects the behavior called "Physics2" and the associated actions (in this case, all objects must be set up to use Physics2, you can\'t mix the behaviors).':
      'This action is deprecated and should not be used anymore. Instead, use for all your objects the behavior called "Physics2" and the associated actions (in this case, all objects must be set up to use Physics2, you can\'t mix the behaviors).',
    'This action will create a new texture and re-render the text each time it is called, which is expensive and can reduce performances. Prefer to avoid changing a lot the character size of a text.':
      'This action will create a new texture and re-render the text each time it is called, which is expensive and can reduce performances. Prefer to avoid changing a lot the character size of a text.',
    "This behavior is being used by multiple types of objects. Thus, you can't restrict its usage to any particular object type. All the object types using this behavior are listed here: {0}": function(
      a
    ) {
      return [
        "This behavior is being used by multiple types of objects. Thus, you can't restrict its usage to any particular object type. All the object types using this behavior are listed here: ",
        a('0'),
      ];
    },
    'This behavior is unknown. It might be a behavior that was defined in an extension and that was later removed. You should delete it.':
      'This behavior is unknown. It might be a behavior that was defined in an extension and that was later removed. You should delete it.',
    'This behavior needs an extension update. You may have to do some adaptations to make sure your game still works.{0}Do you want to update it now ?': function(
      a
    ) {
      return [
        'This behavior needs an extension update. You may have to do some adaptations to make sure your game still works.',
        a('0'),
        'Do you want to update it now ?',
      ];
    },
    "This behavior won't be visible in the events editor.":
      "This behavior won't be visible in the events editor.",
    "This build is old and the generated games can't be downloaded anymore.":
      "This build is old and the generated games can't be downloaded anymore.",
    "This can either be a URL to a web page, or a path starting with a slash that will be opened in the GDevelop wiki. Leave empty if there is no help page, although it's recommended you eventually write one if you distribute the extension.":
      "This can either be a URL to a web page, or a path starting with a slash that will be opened in the GDevelop wiki. Leave empty if there is no help page, although it's recommended you eventually write one if you distribute the extension.",
    "This code is not valid - verify you've entered it properly.":
      "This code is not valid - verify you've entered it properly.",
    "This code was valid but can't be redeemed anymore. If this is unexpected, contact us or the code provider.":
      "This code was valid but can't be redeemed anymore. If this is unexpected, contact us or the code provider.",
    'This condition may have unexpected results when the object is on different floors at the same time, due to the fact that the engine only considers the first floor the object comes into contact with.':
      'This condition may have unexpected results when the object is on different floors at the same time, due to the fact that the engine only considers the first floor the object comes into contact with.',
    'This email is invalid.': 'This email is invalid.',
    'This email was already used for another account.':
      'This email was already used for another account.',
    'This file is an extension file for GDevelop 5. You should instead import it, using the window to add a new extension to your project.':
      'This file is an extension file for GDevelop 5. You should instead import it, using the window to add a new extension to your project.',
    'This file is corrupt': 'This file is corrupt',
    'This file is not recognized as a GDevelop 5 project. Be sure to open a file that was saved using GDevelop.':
      'This file is not recognized as a GDevelop 5 project. Be sure to open a file that was saved using GDevelop.',
    'This function calls itself (it is "recursive"). Ensure this is expected and there is a proper condition to stop it if necessary.':
      'This function calls itself (it is "recursive"). Ensure this is expected and there is a proper condition to stop it if necessary.',
    'This function is asynchronous - it will only allow subsequent events to run after calling the action "End asynchronous task" within the function.':
      'This function is asynchronous - it will only allow subsequent events to run after calling the action "End asynchronous task" within the function.',
    'This function will have a lot of parameters. Consider creating groups or functions for a smaller set of objects so that the function is easier to reuse.':
      'This function will have a lot of parameters. Consider creating groups or functions for a smaller set of objects so that the function is easier to reuse.',
    "This function won't be visible in the events editor.":
      "This function won't be visible in the events editor.",
    'This game is using leaderboards. GDevelop will create new leaderboards for this game in your account, so that the game is ready to be played and players can send their scores.':
      'This game is using leaderboards. GDevelop will create new leaderboards for this game in your account, so that the game is ready to be played and players can send their scores.',
    "This group contains objects of different kinds. You'll only be able to use actions and conditions common to all objects with this group.":
      "This group contains objects of different kinds. You'll only be able to use actions and conditions common to all objects with this group.",
    'This group contains objects of the same kind ({type}). You can use actions and conditions related to this kind of objects in events with this group.': function(
      a
    ) {
      return [
        'This group contains objects of the same kind (',
        a('type'),
        '). You can use actions and conditions related to this kind of objects in events with this group.',
      ];
    },
    "This group will be loaded and available in all the scenes. This is only recommended for groups that you reuse a lot and can't be undone. Make this group global?":
      "This group will be loaded and available in all the scenes. This is only recommended for groups that you reuse a lot and can't be undone. Make this group global?",
    'This is a "lifecycle function". It will be called automatically by the game engine. It has no parameters. Only global objects can be used as the events will be run for all scenes in your game.':
      'This is a "lifecycle function". It will be called automatically by the game engine. It has no parameters. Only global objects can be used as the events will be run for all scenes in your game.',
    'This is a "lifecycle method". It will be called automatically by the game engine and has two parameters: "Object" (the object the behavior is acting on) and "Behavior" (the behavior itself).':
      'This is a "lifecycle method". It will be called automatically by the game engine and has two parameters: "Object" (the object the behavior is acting on) and "Behavior" (the behavior itself).',
    'This is a "lifecycle method". It will be called automatically by the game engine for each instance living on the scene having the behavior.':
      'This is a "lifecycle method". It will be called automatically by the game engine for each instance living on the scene having the behavior.',
    'This is a "lifecycle method". It will be called automatically by the game engine for each instance living on the scene.':
      'This is a "lifecycle method". It will be called automatically by the game engine for each instance living on the scene.',
    'This is a relative path that will open in the GDevelop wiki.':
      'This is a relative path that will open in the GDevelop wiki.',
    'This is all the feedback received on {0} coming from gd.games.': function(
      a
    ) {
      return [
        'This is all the feedback received on ',
        a('0'),
        ' coming from gd.games.',
      ];
    },
    'This is an asynchronous action, meaning that the actions and sub-events following it will wait for it to end. Don\'t forget to use the action "End asynchronous function" to mark the end of the action.':
      'This is an asynchronous action, meaning that the actions and sub-events following it will wait for it to end. Don\'t forget to use the action "End asynchronous function" to mark the end of the action.',
    "This is an extension made by a community member \u2014 but not reviewed by the GDevelop extension team. As such, we can't guarantee it meets all the quality standards of official extensions. It could also not be compatible with older GDevelop versions. In case of doubt, contact the author to know more about what the extension does or inspect its content before using it.":
      "This is an extension made by a community member \u2014 but not reviewed by the GDevelop extension team. As such, we can't guarantee it meets all the quality standards of official extensions. It could also not be compatible with older GDevelop versions. In case of doubt, contact the author to know more about what the extension does or inspect its content before using it.",
    'This is link to a webpage.': 'This is link to a webpage.',
    'This is not a URL starting with "http://" or "https://".':
      'This is not a URL starting with "http://" or "https://".',
    'This is recommended as this allows to maintain free publishing on gd.games and allow to analyze if you could benefit from revenue sharing.':
      'This is recommended as this allows to maintain free publishing on gd.games and allow to analyze if you could benefit from revenue sharing.',
    'This is taking longer than expected... We might have lost contact with the AI.':
      'This is taking longer than expected... We might have lost contact with the AI.',
    "This is the configuration of your behavior. Make sure to choose a proper internal name as it's hard to change it later. Enter a description explaining what the behavior is doing to the object.":
      "This is the configuration of your behavior. Make sure to choose a proper internal name as it's hard to change it later. Enter a description explaining what the behavior is doing to the object.",
    "This is the configuration of your object. Make sure to choose a proper internal name as it's hard to change it later. Enter a description explaining how the object works.":
      "This is the configuration of your object. Make sure to choose a proper internal name as it's hard to change it later. Enter a description explaining how the object works.",
    "This is the list of builds that you've done for this game. <0/>Note that builds for mobile and desktop are available for 7 days, after which they are removed.":
      "This is the list of builds that you've done for this game. <0/>Note that builds for mobile and desktop are available for 7 days, after which they are removed.",
    'This leaderboard is already resetting, please wait a bit, close the dialog, come back and try again.':
      'This leaderboard is already resetting, please wait a bit, close the dialog, come back and try again.',
    "This link is private so you can share it with friends and testers. When you're ready you can update your gd.games game page.":
      "This link is private so you can share it with friends and testers. When you're ready you can update your gd.games game page.",
    'This name is already taken by another extension.':
      'This name is already taken by another extension.',
    'This name is already taken by another function. Choose another name.':
      'This name is already taken by another function. Choose another name.',
    'This name is not valid. Only use alphanumeric characters (0-9, a-z) and underscores.':
      'This name is not valid. Only use alphanumeric characters (0-9, a-z) and underscores.',
    'This object does not have any specific configuration. Add it on the scene and use events to interact with it.':
      'This object does not have any specific configuration. Add it on the scene and use events to interact with it.',
    "This object exists, but can't be used here.":
      "This object exists, but can't be used here.",
    'This object has no behaviors: please add this behavior to the object first.':
      'This object has no behaviors: please add this behavior to the object first.',
    "This object will be loaded and available in all the scenes. This is only recommended for objects that you reuse a lot and can't be undone. Make this object global?":
      "This object will be loaded and available in all the scenes. This is only recommended for objects that you reuse a lot and can't be undone. Make this object global?",
    'This pack is included in this bundle for {0} !': function(a) {
      return ['This pack is included in this bundle for ', a('0'), ' !'];
    },
    'This password is too weak: please use more letters and digits.':
      'This password is too weak: please use more letters and digits.',
    'This project cannot be opened': 'This project cannot be opened',
    'This project has an auto-saved version':
      'This project has an auto-saved version',
    'This project is not registered online. Register it now to get access to leaderboards, player accounts, analytics and more!':
      'This project is not registered online. Register it now to get access to leaderboards, player accounts, analytics and more!',
    'This project was modified by someone else on the {formattedDate} at {formattedTime}. Do you want to overwrite their changes?': function(
      a
    ) {
      return [
        'This project was modified by someone else on the ',
        a('formattedDate'),
        ' at ',
        a('formattedTime'),
        '. Do you want to overwrite their changes?',
      ];
    },
    'This project was modified by {lastUsernameWhoModifiedProject} on the {formattedDate} at {formattedTime}. Do you want to overwrite their changes?': function(
      a
    ) {
      return [
        'This project was modified by ',
        a('lastUsernameWhoModifiedProject'),
        ' on the ',
        a('formattedDate'),
        ' at ',
        a('formattedTime'),
        '. Do you want to overwrite their changes?',
      ];
    },
    'This resource does not exist in the game':
      'This resource does not exist in the game',
    'This scene will be used as the start scene.':
      'This scene will be used as the start scene.',
    'This setting changes the visibility of the entire layer. Objects on the layer will not be treated as "hidden" for event conditions or actions.':
      'This setting changes the visibility of the entire layer. Objects on the layer will not be treated as "hidden" for event conditions or actions.',
    'This shortcut clashes with another action.':
      'This shortcut clashes with another action.',
    'This sprite uses a rectangle that is as large as the sprite for its collision mask.':
      'This sprite uses a rectangle that is as large as the sprite for its collision mask.',
    'This tutorial is available in the following languages:':
      'This tutorial is available in the following languages:',
    'This user does not have projects yet.':
      'This user does not have projects yet.',
    'This user is already a collaborator.':
      'This user is already a collaborator.',
    'This user was not found: have you created your account?':
      'This user was not found: have you created your account?',
    'This username is already used, please pick another one.':
      'This username is already used, please pick another one.',
    'This variable is not declared. Use the variable editor to add it.':
      'This variable is not declared. Use the variable editor to add it.',
    'This version of GDevelop is:': 'This version of GDevelop is:',
    'This week': 'This week',
    'This will be used when packaging and submitting your application to the stores.':
      'This will be used when packaging and submitting your application to the stores.',
    'This will export your game as a Cordova project. Cordova is a technology that enables HTML5 games to be packaged for iOS and Android.':
      'This will export your game as a Cordova project. Cordova is a technology that enables HTML5 games to be packaged for iOS and Android.',
    'This will export your game so that you can package it for Windows, macOS or Linux. You will need to install third-party tools (Node.js, Electron Builder) to package your game.':
      'This will export your game so that you can package it for Windows, macOS or Linux. You will need to install third-party tools (Node.js, Electron Builder) to package your game.',
    'This will export your game to a folder. You can then upload it on a website/game hosting service and share it on marketplaces and gaming portals like CrazyGames, Poki, Game Jolt, itch.io, Newgrounds...':
      'This will export your game to a folder. You can then upload it on a website/game hosting service and share it on marketplaces and gaming portals like CrazyGames, Poki, Game Jolt, itch.io, Newgrounds...',
    'This/these file(s) are outside the project folder. Would you like to make a copy of them in your project folder first (recommended)?':
      'This/these file(s) are outside the project folder. Would you like to make a copy of them in your project folder first (recommended)?',
    'Throwing physics': 'Throwing physics',
    TikTok: 'TikTok',
    'Tile Map': 'Tile Map',
    'Tile Set': 'Tile Set',
    'Tile map resource': 'Tile map resource',
    'Tiled sprite': 'Tiled sprite',
    'Tiled sprites': 'Tiled sprites',
    'Time (ms)': 'Time (ms)',
    'Time between frames': 'Time between frames',
    'Time format': 'Time format',
    Timers: 'Timers',
    'Timers:': 'Timers:',
    'Timestamp: {0}': function(a) {
      return ['Timestamp: ', a('0')];
    },
    Tiny: 'Tiny',
    'Tip: search for \u201Cwizard\u201D.':
      'Tip: search for \u201Cwizard\u201D.',
    'Title cannot be empty.': 'Title cannot be empty.',
    'To avoid flickering on objects followed by the camera, use sprites with even dimensions.':
      'To avoid flickering on objects followed by the camera, use sprites with even dimensions.',
    'To begin, open or create a new project.':
      'To begin, open or create a new project.',
    'To confirm, type "{translatedConfirmText}"': function(a) {
      return ['To confirm, type "', a('translatedConfirmText'), '"'];
    },
    'To edit the external events, choose the scene in which it will be included':
      'To edit the external events, choose the scene in which it will be included',
    'To edit the external layout, choose the scene in which it will be included':
      'To edit the external layout, choose the scene in which it will be included',
    'To get this new subscription, we need to cancel your existing one before you can pay for the new one. The change will be immediate but your payment will NOT be pro-rated (you will have to pay as for a new subscription).':
      'To get this new subscription, we need to cancel your existing one before you can pay for the new one. The change will be immediate but your payment will NOT be pro-rated (you will have to pay as for a new subscription).',
    'To get this new subscription, we need to cancel your existing one before you can pay for the new one. The change will be immediate. You will also lose your redeemed code.':
      'To get this new subscription, we need to cancel your existing one before you can pay for the new one. The change will be immediate. You will also lose your redeemed code.',
    'To keep using GDevelop cloud, consider deleting old, unused projects.':
      'To keep using GDevelop cloud, consider deleting old, unused projects.',
    'To keep using GDevelop leaderboards, consider deleting old, unused leaderboards.':
      'To keep using GDevelop leaderboards, consider deleting old, unused leaderboards.',
    "To make sure it's fixed, you can create a <0>GitHub account</0> then report the issue with the button below.":
      "To make sure it's fixed, you can create a <0>GitHub account</0> then report the issue with the button below.",
    'To obtain the best pixel-perfect effect possible, go in the resources editor and disable the Smoothing for all images of your game. It will be done automatically for new images added from now.':
      'To obtain the best pixel-perfect effect possible, go in the resources editor and disable the Smoothing for all images of your game. It will be done automatically for new images added from now.',
    'To preview the shape that the Physics engine will use for this object, choose first a temporary image to use for the preview.':
      'To preview the shape that the Physics engine will use for this object, choose first a temporary image to use for the preview.',
    'To start a timer, don\'t forget to use the action "Start (or reset) a scene timer" in another event.':
      'To start a timer, don\'t forget to use the action "Start (or reset) a scene timer" in another event.',
    'To start a timer, don\'t forget to use the action "Start (or reset) an object timer" in another event.':
      'To start a timer, don\'t forget to use the action "Start (or reset) an object timer" in another event.',
    'To update your thumbnail, go into your Game Settings > Icons and thumbnail, then create and publish a new build.':
      'To update your thumbnail, go into your Game Settings > Icons and thumbnail, then create and publish a new build.',
    'To use this feature, you need a GDevelop subscription.':
      'To use this feature, you need a GDevelop subscription.',
    'To use this formatting, you must send a score expressed in seconds':
      'To use this formatting, you must send a score expressed in seconds',
    Today: 'Today',
    'Toggle Developer Tools': 'Toggle Developer Tools',
    'Toggle Disabled': 'Toggle Disabled',
    'Toggle Fullscreen': 'Toggle Fullscreen',
    'Toggle Instances List Panel': 'Toggle Instances List Panel',
    'Toggle Layers Panel': 'Toggle Layers Panel',
    'Toggle Object Groups Panel': 'Toggle Object Groups Panel',
    'Toggle Objects Panel': 'Toggle Objects Panel',
    'Toggle Properties Panel': 'Toggle Properties Panel',
    'Toggle Wait the Action to End': 'Toggle Wait the Action to End',
    'Toggle disabled event': 'Toggle disabled event',
    'Toggle grid': 'Toggle grid',
    'Toggle inverted condition': 'Toggle inverted condition',
    'Toggle mask': 'Toggle mask',
    'Toggle switch': 'Toggle switch',
    'Toggle/edit grid': 'Toggle/edit grid',
    Top: 'Top',
    'Top face': 'Top face',
    'Top left corner': 'Top left corner',
    'Top margin': 'Top margin',
    'Top right corner': 'Top right corner',
    'Top-Left': 'Top-Left',
    'Top-down': 'Top-down',
    'Top-left corner': 'Top-left corner',
    'Train workers on specific scenarios':
      'Train workers on specific scenarios',
    Triangle: 'Triangle',
    True: 'True',
    'True (checked)': 'True (checked)',
    'True or False': 'True or False',
    'True or False (boolean)': 'True or False (boolean)',
    'Try again': 'Try again',
    'Try installing it from the extension store.':
      'Try installing it from the extension store.',
    'Try it online': 'Try it online',
    'Try making your prompt more specific.':
      'Try making your prompt more specific.',
    'Try something else, browse the packs or create your object from scratch!':
      'Try something else, browse the packs or create your object from scratch!',
    Turkish: 'Turkish',
    Tutorial: 'Tutorial',
    Twitter: 'Twitter',
    Type: 'Type',
    'Type a prompt yourself or generate a random one':
      'Type a prompt yourself or generate a random one',
    'Type of License: <0>{0}</0>': function(a) {
      return ['Type of License: <0>', a('0'), '</0>'];
    },
    'Type of objects': 'Type of objects',
    'Type your email address to delete your account:':
      'Type your email address to delete your account:',
    'Type your email to confirm': 'Type your email to confirm',
    'Type:': 'Type:',
    'UI Theme': 'UI Theme',
    'UI/Interface': 'UI/Interface',
    URL: 'URL',
    Ukrainian: 'Ukrainian',
    'Unable to change read status of feedback.':
      'Unable to change read status of feedback.',
    'Unable to create a new project for the tutorial. Try again later.':
      'Unable to create a new project for the tutorial. Try again later.',
    'Unable to create the project': 'Unable to create the project',
    'Unable to delete the game.': 'Unable to delete the game.',
    'Unable to delete the project': 'Unable to delete the project',
    'Unable to display your achievements for now.':
      'Unable to display your achievements for now.',
    'Unable to download and install the extension. Verify that your internet connection is working or try again later.':
      'Unable to download and install the extension. Verify that your internet connection is working or try again later.',
    'Unable to download the icon. Verify your internet connection or try again later.':
      'Unable to download the icon. Verify your internet connection or try again later.',
    'Unable to fetch the example.': 'Unable to fetch the example.',
    'Unable to generate project': 'Unable to generate project',
    'Unable to get the checkout URL. Please try again later.':
      'Unable to get the checkout URL. Please try again later.',
    'Unable to load the code editor': 'Unable to load the code editor',
    'Unable to load the image': 'Unable to load the image',
    'Unable to load the information about the latest GDevelop releases. Verify your internet connection or retry later.':
      'Unable to load the information about the latest GDevelop releases. Verify your internet connection or retry later.',
    'Unable to load the profile, please verify your internet connection or try again later.':
      'Unable to load the profile, please verify your internet connection or try again later.',
    'Unable to mark one of the feedback as read.':
      'Unable to mark one of the feedback as read.',
    'Unable to open the project': 'Unable to open the project',
    'Unable to open the project because this provider is unknown: {storageProviderName}. Try to open the project again from another location.': function(
      a
    ) {
      return [
        'Unable to open the project because this provider is unknown: ',
        a('storageProviderName'),
        '. Try to open the project again from another location.',
      ];
    },
    'Unable to open the project.': 'Unable to open the project.',
    'Unable to open this file.': 'Unable to open this file.',
    'Unable to register the game': 'Unable to register the game',
    'Unable to remove collaborator': 'Unable to remove collaborator',
    'Unable to save the project': 'Unable to save the project',
    'Unable to start the debugger server! Make sure that you are authorized to run servers on this computer.':
      'Unable to start the debugger server! Make sure that you are authorized to run servers on this computer.',
    'Unable to start the server for the preview! Make sure that you are authorized to run servers on this computer. Otherwise, use classic preview to test your game.':
      'Unable to start the server for the preview! Make sure that you are authorized to run servers on this computer. Otherwise, use classic preview to test your game.',
    'Unable to update game.': 'Unable to update game.',
    'Unable to update the authors of the project.':
      'Unable to update the authors of the project.',
    'Unable to update the game details.': 'Unable to update the game details.',
    'Unable to update the game owners or authors. Have you removed yourself from the owners?':
      'Unable to update the game owners or authors. Have you removed yourself from the owners?',
    'Unable to update the game slug.': 'Unable to update the game slug.',
    'Unable to update the game slug. A slug must be 6 to 30 characters long and only contains letters, digits or dashes.':
      'Unable to update the game slug. A slug must be 6 to 30 characters long and only contains letters, digits or dashes.',
    'Unable to update the game.': 'Unable to update the game.',
    'Unable to verify URLs {0} . Please check they are correct.': function(a) {
      return [
        'Unable to verify URLs ',
        a('0'),
        ' . Please check they are correct.',
      ];
    },
    Undo: 'Undo',
    'Undo the last changes': 'Undo the last changes',
    'Unexpected error': 'Unexpected error',
    'Unfortunately, this example requires a newer version of GDevelop to work. Update GDevelop to be able to open this example.':
      'Unfortunately, this example requires a newer version of GDevelop to work. Update GDevelop to be able to open this example.',
    'Unfortunately, this extension requires a newer version of GDevelop to work. Update GDevelop to be able to use this extension in your project.':
      'Unfortunately, this extension requires a newer version of GDevelop to work. Update GDevelop to be able to use this extension in your project.',
    'Unknown behavior': 'Unknown behavior',
    'Unknown status': 'Unknown status',
    'Unknown status.': 'Unknown status.',
    'Unlimited leaderboards and unlimited player feedback responses.':
      'Unlimited leaderboards and unlimited player feedback responses.',
    'Unlimited packagings per day for Android, web and desktop.':
      'Unlimited packagings per day for Android, web and desktop.',
    'Unlock full access to GDevelop to create without limits!':
      'Unlock full access to GDevelop to create without limits!',
    'Unlock layer': 'Unlock layer',
    'Unlock more one-click exports, cloud projects, leaderboards and remove the GDevelop splashscreen.':
      'Unlock more one-click exports, cloud projects, leaderboards and remove the GDevelop splashscreen.',
    Unnamed: 'Unnamed',
    'Unpublish from gd.games': 'Unpublish from gd.games',
    'Unregister game': 'Unregister game',
    'Unregister this game': 'Unregister this game',
    'Untitled external events': 'Untitled external events',
    'Untitled external layout': 'Untitled external layout',
    'Untitled scene': 'Untitled scene',
    UntitledExtension: 'UntitledExtension',
    Update: 'Update',
    'Update (could break the project)': 'Update (could break the project)',
    'Update my subscription': 'Update my subscription',
    'Update resolution during the game to fit the screen or window size':
      'Update resolution during the game to fit the screen or window size',
    'Update the elevation of a 3D box': 'Update the elevation of a 3D box',
    'Update the extension': 'Update the extension',
    'Update to GDevelop Premium to get more leaderboards, storage, and one-click packagings!':
      'Update to GDevelop Premium to get more leaderboards, storage, and one-click packagings!',
    'Update to GDevelop Premium to get more storage, leaderboards, and one-click packagings!':
      'Update to GDevelop Premium to get more storage, leaderboards, and one-click packagings!',
    'Update your subscription': 'Update your subscription',
    Updates: 'Updates',
    'Updating a score accordingly': 'Updating a score accordingly',
    Upgrade: 'Upgrade',
    'Upgrade my account': 'Upgrade my account',
    'Upload to build service': 'Upload to build service',
    'Use & manipulate a variable': 'Use & manipulate a variable',
    'Use GDevelop for free, forever. We also give you access to these additional online services for free.':
      'Use GDevelop for free, forever. We also give you access to these additional online services for free.',
    'Use a behavior': 'Use a behavior',
    'Use a custom collision mask': 'Use a custom collision mask',
    "Use a prefab to display the player's health bar":
      "Use a prefab to display the player's health bar",
    'Use a public URL': 'Use a public URL',
    'Use a tiled sprite': 'Use a tiled sprite',
    'Use a timer': 'Use a timer',
    'Use an Expression': 'Use an Expression',
    'Use basic camera movements to follow the player':
      'Use basic camera movements to follow the player',
    'Use custom CSS for the leaderboard': 'Use custom CSS for the leaderboard',
    'Use full image as collision mask': 'Use full image as collision mask',
    'Use same collision mask': 'Use same collision mask',
    'Use same collision mask for all animations?':
      'Use same collision mask for all animations?',
    'Use same collision mask for all frames?':
      'Use same collision mask for all frames?',
    'Use same points': 'Use same points',
    'Use same points for all animations?':
      'Use same points for all animations?',
    'Use same points for all frames?': 'Use same points for all frames?',
    'Use the timer to display a score': 'Use the timer to display a score',
    'Use this external layout inside this scene to start all previews':
      'Use this external layout inside this scene to start all previews',
    'Use this scene to start all previews':
      'Use this scene to start all previews',
    'User interface': 'User interface',
    'User name in the game URL': 'User name in the game URL',
    Username: 'Username',
    'Usernames are required to choose a custom game URL.':
      'Usernames are required to choose a custom game URL.',
    "Users can chose to see only players' best entries or not.":
      "Users can chose to see only players' best entries or not.",
    'Using Nearest Scale Mode': 'Using Nearest Scale Mode',
    'Using a lot of effects can have a severe negative impact on the rendering performance, especially on low-end or mobile devices. Consider using less effects if possible. You can also disable and re-enable effects as needed using events.':
      'Using a lot of effects can have a severe negative impact on the rendering performance, especially on low-end or mobile devices. Consider using less effects if possible. You can also disable and re-enable effects as needed using events.',
    'Using effects': 'Using effects',
    'Using empty events based behavior': 'Using empty events based behavior',
    'Using empty events based object': 'Using empty events based object',
    'Using events based behavior': 'Using events based behavior',
    'Using events based object': 'Using events based object',
    'Using function extractor': 'Using function extractor',
    'Using lighting layer': 'Using lighting layer',
    'Using non smoothed textures': 'Using non smoothed textures',
    'Using pixel rounding': 'Using pixel rounding',
    'Using the resource properties panel':
      'Using the resource properties panel',
    'Using too much effects': 'Using too much effects',
    'Validate these parameters': 'Validate these parameters',
    Variables: 'Variables',
    'Verify and Publish to gd.games': 'Verify and Publish to gd.games',
    "Verify that you have the authorization for reading the file you're trying to access.":
      "Verify that you have the authorization for reading the file you're trying to access.",
    'Verify that your internet connection is working or try again later.':
      'Verify that your internet connection is working or try again later.',
    'Verify your game info before publishing':
      'Verify your game info before publishing',
    'Verify your internet connection or try again later.':
      'Verify your internet connection or try again later.',
    Version: 'Version',
    'Version number (X.Y.Z)': 'Version number (X.Y.Z)',
    'Version {0}': function(a) {
      return ['Version ', a('0')];
    },
    Video: 'Video',
    'Video format supported can vary according to devices and browsers. For maximum compatibility, use H.264/mp4 file format (and AAC for audio).':
      'Video format supported can vary according to devices and browsers. For maximum compatibility, use H.264/mp4 file format (and AAC for audio).',
    'Video resource': 'Video resource',
    View: 'View',
    Viewers: 'Viewers',
    Viewpoint: 'Viewpoint',
    Visible: 'Visible',
    'Visible in editor': 'Visible in editor',
    'Visual Effects': 'Visual Effects',
    'Visual appearance': 'Visual appearance',
    'Visual appearance (advanced)': 'Visual appearance (advanced)',
    'Visual effect': 'Visual effect',
    Visuals: 'Visuals',
    'Wait for the action to end before executing the actions (and subevents) following it':
      'Wait for the action to end before executing the actions (and subevents) following it',
    'Waiting for the purchase confirmation...':
      'Waiting for the purchase confirmation...',
    'Waiting for the subscription confirmation...':
      'Waiting for the subscription confirmation...',
    'Want to explore further?': 'Want to explore further?',
    'Watch changes in game engine (GDJS) sources and auto import them (dev only)':
      'Watch changes in game engine (GDJS) sources and auto import them (dev only)',
    'Watch the project folder for file changes in order to refresh the resources used in the editor (images, 3D models, fonts, etc.)':
      'Watch the project folder for file changes in order to refresh the resources used in the editor (images, 3D models, fonts, etc.)',
    'Watch tutorial': 'Watch tutorial',
    "We couldn't find a version to go back to.":
      "We couldn't find a version to go back to.",
    "We couldn't load your cloud projects. Verify your internet connection or try again later.":
      "We couldn't load your cloud projects. Verify your internet connection or try again later.",
    'We have found a non-corrupt save from {0} available for modification.': function(
      a
    ) {
      return [
        'We have found a non-corrupt save from ',
        a('0'),
        ' available for modification.',
      ];
    },
    'We need your support!': 'We need your support!',
    "We'll create a simple game with **a character that can collect coins**. {0}{1}Let's create a new project!": function(
      a
    ) {
      return [
        "We'll create a simple game with **a character that can collect coins**. ",
        a('0'),
        a('1'),
        "Let's create a new project!",
      ];
    },
    "We're good.": "We're good.",
    Web: 'Web',
    'Web Build': 'Web Build',
    'Web builds': 'Web builds',
    'Welcome back!': 'Welcome back!',
    'Welcome to GDevelop!': 'Welcome to GDevelop!',
    'What are you using GDevelop for?': 'What are you using GDevelop for?',
    'What do you want to accomplish with GDevelop?':
      'What do you want to accomplish with GDevelop?',
    'What kind of game engines have you used before?':
      'What kind of game engines have you used before?',
    'What would you like to do with this uncorrupted version of your project?':
      'What would you like to do with this uncorrupted version of your project?',
    'What you get': 'What you get',
    "What's new in GDevelop?": "What's new in GDevelop?",
    "What's new?": "What's new?",
    'When checked, will only display the best score of each player (only for the display below).':
      'When checked, will only display the best score of each player (only for the display below).',
    'When previewing the game in the editor, this duration is ignored (the game preview starts as soon as possible).':
      'When previewing the game in the editor, this duration is ignored (the game preview starts as soon as possible).',
    "When you create an object using an action, GDevelop now sets the Z order of the object to the maximum value that was found when starting the scene for each layer. This allow to make sure that objects that you create are in front of others. This game was created before this change, so GDevelop maintains the old behavior: newly created objects Z order is set to 0. It's recommended that you switch to the new behavior by clicking the following button.":
      "When you create an object using an action, GDevelop now sets the Z order of the object to the maximum value that was found when starting the scene for each layer. This allow to make sure that objects that you create are in front of others. This game was created before this change, so GDevelop maintains the old behavior: newly created objects Z order is set to 0. It's recommended that you switch to the new behavior by clicking the following button.",
    'Where to store this project': 'Where to store this project',
    'While these conditions are true:': 'While these conditions are true:',
    Width: 'Width',
    'Wiki documentation': 'Wiki documentation',
    Window: 'Window',
    'Window title': 'Window title',
    'Windows (auto-installer file)': 'Windows (auto-installer file)',
    'Windows (exe)': 'Windows (exe)',
    'Windows (zip file)': 'Windows (zip file)',
    'Windows (zip)': 'Windows (zip)',
    'Windows, MacOS and Linux': 'Windows, MacOS and Linux',
    'Windows, MacOS, Linux (Steam, MS Store...)':
      'Windows, MacOS, Linux (Steam, MS Store...)',
    'Windows/macOS/Linux': 'Windows/macOS/Linux',
    'Windows/macOS/Linux (manual)': 'Windows/macOS/Linux (manual)',
    'Windows/macOS/Linux Build': 'Windows/macOS/Linux Build',
    'With a subscription, you\u2019re also supporting the improvement of GDevelop.':
      'With a subscription, you\u2019re also supporting the improvement of GDevelop.',
    Work: 'Work',
    'Work (other)': 'Work (other)',
    'Would you like to open the non-corrupt version instead?':
      'Would you like to open the non-corrupt version instead?',
    X: 'X',
    'X offset (in pixels)': 'X offset (in pixels)',
    Y: 'Y',
    'Y offset (in pixels)': 'Y offset (in pixels)',
    Year: 'Year',
    Yes: 'Yes',
    'Yes or No': 'Yes or No',
    'Yes or No (boolean)': 'Yes or No (boolean)',
    'Yes, discard my changes': 'Yes, discard my changes',
    Yesterday: 'Yesterday',
    'You already have these {0} assets installed, do you want to add them again?': function(
      a
    ) {
      return [
        'You already have these ',
        a('0'),
        ' assets installed, do you want to add them again?',
      ];
    },
    'You already have {0} asset(s) in your scene. Do you want to add the remaining {1} one(s)?': function(
      a
    ) {
      return [
        'You already have ',
        a('0'),
        ' asset(s) in your scene. Do you want to add the remaining ',
        a('1'),
        ' one(s)?',
      ];
    },
    'You already own this asset pack. Explore the assets to use them in your project.':
      'You already own this asset pack. Explore the assets to use them in your project.',
    'You already own this pack!': 'You already own this pack!',
    "You already used this code - you can't reuse a code multiple times.":
      "You already used this code - you can't reuse a code multiple times.",
    'You and your students receive a Gold subscription.':
      'You and your students receive a Gold subscription.',
    "You are about to activate a feedback banner on all builds of this game. By doing this you're allowing feedback from any player who has access to your gd.games build URLs. Do you want to continue?":
      "You are about to activate a feedback banner on all builds of this game. By doing this you're allowing feedback from any player who has access to your gd.games build URLs. Do you want to continue?",
    'You are about to activate a feedback banner on your gd.games game page. By doing this you will receive feedback from any gd.games visitor. Do you want to continue?':
      'You are about to activate a feedback banner on your gd.games game page. By doing this you will receive feedback from any gd.games visitor. Do you want to continue?',
    'You are about to de-activate the feedback banner on all your gd.games build pages. Do you want to continue ?':
      'You are about to de-activate the feedback banner on all your gd.games build pages. Do you want to continue ?',
    'You are about to de-activate the feedback banner on your gd.games game page. Do you want to continue ?':
      'You are about to de-activate the feedback banner on your gd.games game page. Do you want to continue ?',
    'You are about to delete an object': 'You are about to delete an object',
    'You are about to hide this game from gd.games categories pages. Do you want to continue?':
      'You are about to hide this game from gd.games categories pages. Do you want to continue?',
    'You are about to make this game discoverable on gd.games categories pages. Do you want to continue?':
      'You are about to make this game discoverable on gd.games categories pages. Do you want to continue?',
    'You are about to quit the tutorial.':
      'You are about to quit the tutorial.',
    'You are about to remove the last sprite of this object, which has a custom collision mask. The custom collision mask will be lost. Are you sure you want to continue?':
      'You are about to remove the last sprite of this object, which has a custom collision mask. The custom collision mask will be lost. Are you sure you want to continue?',
    'You are about to remove {0}{1} from the list of collaborators. Are you sure?': function(
      a
    ) {
      return [
        'You are about to remove ',
        a('0'),
        a('1'),
        ' from the list of collaborators. Are you sure?',
      ];
    },
    'You are in raw mode. You can edit the fields, but be aware that this can lead to unexpected results or even crash the debugged game!':
      'You are in raw mode. You can edit the fields, but be aware that this can lead to unexpected results or even crash the debugged game!',
    "You are missing out on asset store discounts and other benefits! Verify your email address. Didn't receive it?":
      "You are missing out on asset store discounts and other benefits! Verify your email address. Didn't receive it?",
    'You are not connected. Create an account to build your game for Android, Windows, macOS and Linux in one click, and get access to metrics for your game.':
      'You are not connected. Create an account to build your game for Android, Windows, macOS and Linux in one click, and get access to metrics for your game.',
    'You are not owner of this project, so you cannot invite collaborators.':
      'You are not owner of this project, so you cannot invite collaborators.',
    'You are not the owner of this game, ask the owner to add you as an owner to see its exports.':
      'You are not the owner of this game, ask the owner to add you as an owner to see its exports.',
    'You can <0>help to translate GDevelop in your language</0>.':
      'You can <0>help to translate GDevelop in your language</0>.',
    'You can also launch a preview from this external layout, but remember that it will still create objects from the scene, as well as trigger its events. Make sure to disable any action loading the external layout before doing so to avoid having duplicate objects!':
      'You can also launch a preview from this external layout, but remember that it will still create objects from the scene, as well as trigger its events. Make sure to disable any action loading the external layout before doing so to avoid having duplicate objects!',
    'You can contribute and <0>create your own themes</0>.':
      'You can contribute and <0>create your own themes</0>.',
    'You can download the file of your game to continue working on it using the full GDevelop version:':
      'You can download the file of your game to continue working on it using the full GDevelop version:',
    'You can export the extension to a file to easily import it in another project. If your extension is providing useful and reusable functions or behaviors, consider sharing it with the GDevelop community!':
      'You can export the extension to a file to easily import it in another project. If your extension is providing useful and reusable functions or behaviors, consider sharing it with the GDevelop community!',
    'You can export the object to a file to submit it to the asset store.':
      'You can export the object to a file to submit it to the asset store.',
    'You can find your cloud projects in the Build section of the homepage.':
      'You can find your cloud projects in the Build section of the homepage.',
    'You can now compile the game by yourself using Cordova command-line tool to iOS (XCode is required) or Android (Android SDK is required).':
      'You can now compile the game by yourself using Cordova command-line tool to iOS (XCode is required) or Android (Android SDK is required).',
    'You can now create a game on Facebook Instant Games, if not already done, and upload the generated archive.':
      'You can now create a game on Facebook Instant Games, if not already done, and upload the generated archive.',
    'You can now go back to the asset store to use the assets in your games.':
      'You can now go back to the asset store to use the assets in your games.',
    'You can now go back to the store to use your new game template.':
      'You can now go back to the store to use your new game template.',
    'You can now upload the game to a web hosting to play to the game.':
      'You can now upload the game to a web hosting to play to the game.',
    'You can only install up to {MAX_ASSETS_TO_INSTALL} assets at once. Try filtering the assets you would like to install, or install them one by one.': function(
      a
    ) {
      return [
        'You can only install up to ',
        a('MAX_ASSETS_TO_INSTALL'),
        ' assets at once. Try filtering the assets you would like to install, or install them one by one.',
      ];
    },
    'You can open the command palette by pressing {commandPaletteShortcut}.': function(
      a
    ) {
      return [
        'You can open the command palette by pressing ',
        a('commandPaletteShortcut'),
        '.',
      ];
    },
    'You can save your project to come back to it later. What do you want to do?':
      'You can save your project to come back to it later. What do you want to do?',
    'You can wait a bit more, or try refining your prompt.':
      'You can wait a bit more, or try refining your prompt.',
    "You can't delete your account while you have an active subscription. Please cancel your subscription first.":
      "You can't delete your account while you have an active subscription. Please cancel your subscription first.",
    'You cannot add yourself as a collaborator.':
      'You cannot add yourself as a collaborator.',
    'You cannot do this.': 'You cannot do this.',
    'You cannot unregister a game that has active leaderboards. To delete them, go in the Leaderboards tab, and delete them one by one.':
      'You cannot unregister a game that has active leaderboards. To delete them, go in the Leaderboards tab, and delete them one by one.',
    'You currently have a subscription, applied thanks to a redemption code, valid until {0}. If you redeem another code, your existing subscription will be canceled and not redeemable anymore!': function(
      a
    ) {
      return [
        'You currently have a subscription, applied thanks to a redemption code, valid until ',
        a('0'),
        '. If you redeem another code, your existing subscription will be canceled and not redeemable anymore!',
      ];
    },
    'You currently have a subscription. If you redeem a code, the existing subscription will be cancelled and replaced by the one given by the code.':
      'You currently have a subscription. If you redeem a code, the existing subscription will be cancelled and replaced by the one given by the code.',
    "You don't have a subscription. Get one to increase the limits!":
      "You don't have a subscription. Get one to increase the limits!",
    "You don't have any builds for this game.":
      "You don't have any builds for this game.",
    "You don't have any desktop builds for this game.":
      "You don't have any desktop builds for this game.",
    "You don't have any feedback for this game.":
      "You don't have any feedback for this game.",
    "You don't have any mobile builds for this game.":
      "You don't have any mobile builds for this game.",
    "You don't have any unread feedback for this game.":
      "You don't have any unread feedback for this game.",
    "You don't have any web builds for this game.":
      "You don't have any web builds for this game.",
    "You don't have permissions to add collaborators.":
      "You don't have permissions to add collaborators.",
    "You don't have permissions to delete this project.":
      "You don't have permissions to delete this project.",
    "You don't have permissions to save this project. Please choose another location.":
      "You don't have permissions to save this project. Please choose another location.",
    "You don't need to add the @ in your username":
      "You don't need to add the @ in your username",
    "You don't own any pack yet!": "You don't own any pack yet!",
    'You have an active subscription': 'You have an active subscription',
    'You have reached the maximum number of games you can register! You can unregister games in your Games Dashboard.':
      'You have reached the maximum number of games you can register! You can unregister games in your Games Dashboard.',
    'You have reached the maximum number of guest collaborators for your subscription. Ask this user to get a Startup subscription!':
      'You have reached the maximum number of guest collaborators for your subscription. Ask this user to get a Startup subscription!',
    'You have {0} remaining builds for today (out of {1}).': function(a) {
      return [
        'You have ',
        a('0'),
        ' remaining builds for today (out of ',
        a('1'),
        ').',
      ];
    },
    "You haven't contributed any examples":
      "You haven't contributed any examples",
    "You haven't contributed any extensions":
      "You haven't contributed any extensions",
    'You just added an instance to a hidden layer ("{0}"). Open the layer panel to make it visible.': function(
      a
    ) {
      return [
        'You just added an instance to a hidden layer ("',
        a('0'),
        '"). Open the layer panel to make it visible.',
      ];
    },
    'You might like': 'You might like',
    'You must be connected to use online export services.':
      'You must be connected to use online export services.',
    'You must be logged in to invite collaborators.':
      'You must be logged in to invite collaborators.',
    'You must select a key.': 'You must select a key.',
    'You must select a valid key. "{value}" is not valid.': function(a) {
      return ['You must select a valid key. "', a('value'), '" is not valid.'];
    },
    'You must select at least one user to be the owner of the game.':
      'You must select at least one user to be the owner of the game.',
    'You need to first save your project to the cloud to invite collaborators.':
      'You need to first save your project to the cloud to invite collaborators.',
    'You need to login first to see your builds.':
      'You need to login first to see your builds.',
    'You need to login first to see your game feedbacks.':
      'You need to login first to see your game feedbacks.',
    'You need to save this project as a cloud project to install premium assets. Please save your project and try again.':
      'You need to save this project as a cloud project to install premium assets. Please save your project and try again.',
    'You need to save this project as a cloud project to install this asset. Please save your project and try again.':
      'You need to save this project as a cloud project to install this asset. Please save your project and try again.',
    "You should have received an email containing instructions to reset and set a new password. Once it's done, you can use your new password in GDevelop.":
      "You should have received an email containing instructions to reset and set a new password. Once it's done, you can use your new password in GDevelop.",
    'You will get access to special discounts on the GDevelop asset store, as well as weekly stats about your games.':
      'You will get access to special discounts on the GDevelop asset store, as well as weekly stats about your games.',
    'You will lose all custom collision masks. Do you want to continue?':
      'You will lose all custom collision masks. Do you want to continue?',
    "You're about to add 1 asset.": "You're about to add 1 asset.",
    "You're about to add {0} assets.": function(a) {
      return ["You're about to add ", a('0'), ' assets.'];
    },
    "You're about to change the thumbnail displayed on gd.games for your game. Once you have applied changes here, you will then need to publish a new version of your game on gd.games so that this new thumbnail is used.":
      "You're about to change the thumbnail displayed on gd.games for your game. Once you have applied changes here, you will then need to publish a new version of your game on gd.games so that this new thumbnail is used.",
    'You\'re about to open (or re-open) a project. Click on "Open the Project" to continue.':
      'You\'re about to open (or re-open) a project. Click on "Open the Project" to continue.',
    "You're about to restart this 3-chapter guided lesson.":
      "You're about to restart this 3-chapter guided lesson.",
    "You're about to start the first chapter of this guided lesson.":
      "You're about to start the first chapter of this guided lesson.",
    "You're about to start this guided lesson.":
      "You're about to start this guided lesson.",
    "You're also supporting the development of GDevelop, an open-source software! In the future, more online services will be available for users with a subscription.":
      "You're also supporting the development of GDevelop, an open-source software! In the future, more online services will be available for users with a subscription.",
    "You're leaving the game tutorial": "You're leaving the game tutorial",
    "You're now logged out": "You're now logged out",
    "You've made some changes here. Are you sure you want to discard them and open the behavior events?":
      "You've made some changes here. Are you sure you want to discard them and open the behavior events?",
    "You've made some changes here. Are you sure you want to discard them and open the function?":
      "You've made some changes here. Are you sure you want to discard them and open the function?",
    "You've reached the limit of cloud projects you can have. Delete some existing cloud projects of yours before trying again.":
      "You've reached the limit of cloud projects you can have. Delete some existing cloud projects of yours before trying again.",
    "You've reached your maximum of {0} leaderboards for your game": function(
      a
    ) {
      return [
        "You've reached your maximum of ",
        a('0'),
        ' leaderboards for your game',
      ];
    },
    "You've reached your maximum storage of {maximumCount} cloud-based projects": function(
      a
    ) {
      return [
        "You've reached your maximum storage of ",
        a('maximumCount'),
        ' cloud-based projects',
      ];
    },
    "You've used all your daily pre-made AI scenes! Generate as many as you want with a subscription.":
      "You've used all your daily pre-made AI scenes! Generate as many as you want with a subscription.",
    YouTube: 'YouTube',
    'YouTube channel (tutorials and more)':
      'YouTube channel (tutorials and more)',
    'Your account has been deleted!': 'Your account has been deleted!',
    'Your account is upgraded, with the extra exports and online services. If you wish to change later, come back to your profile and choose another plan.':
      'Your account is upgraded, with the extra exports and online services. If you wish to change later, come back to your profile and choose another plan.',
    "Your answers will help us better understand our users and make the engine better for them. Of course, your answers will stay private and won't be sent to anyone else.":
      "Your answers will help us better understand our users and make the engine better for them. Of course, your answers will stay private and won't be sent to anyone else.",
    'Your browser will now open to enter your payment details.':
      'Your browser will now open to enter your payment details.',
    'Your computer': 'Your computer',
    'Your game has some invalid elements, please fix these before continuing:':
      'Your game has some invalid elements, please fix these before continuing:',
    'Your game is published! Share it with the community!':
      'Your game is published! Share it with the community!',
    'Your game will be exported and packaged online as a stand-alone game for Windows, Linux and/or macOS.':
      'Your game will be exported and packaged online as a stand-alone game for Windows, Linux and/or macOS.',
    "Your game won't work if you open index.html on your computer. You must upload it to a web hosting (Kongregate, Itch.io, etc...) or a web server to run it.":
      "Your game won't work if you open index.html on your computer. You must upload it to a web hosting (Kongregate, Itch.io, etc...) or a web server to run it.",
    'Your latest changes could not be applied to the preview(s) being run. You should start a new preview instead to make sure that all your changes are reflected in the game.':
      'Your latest changes could not be applied to the preview(s) being run. You should start a new preview instead to make sure that all your changes are reflected in the game.',
    'Your name': 'Your name',
    'Your need to first create your account, or login, to upload your own resources.':
      'Your need to first create your account, or login, to upload your own resources.',
    'Your need to first save your game on GDevelop Cloud to upload your own resources.':
      'Your need to first save your game on GDevelop Cloud to upload your own resources.',
    'Your new plan is now activated.': 'Your new plan is now activated.',
    'Your preview is ready! On your mobile or tablet, open your browser and enter in the address bar:':
      'Your preview is ready! On your mobile or tablet, open your browser and enter in the address bar:',
    "Your project is saved in the same folder as the application. This folder will be deleted when the application is updated. Please choose another location if you don't want to lose your project.":
      "Your project is saved in the same folder as the application. This folder will be deleted when the application is updated. Please choose another location if you don't want to lose your project.",
    'Your project name has changed, this will also save the whole project, continue?':
      'Your project name has changed, this will also save the whole project, continue?',
    'Your purchase has been processed!': 'Your purchase has been processed!',
    'Your subscription could not be cancelled. Please try again later!':
      'Your subscription could not be cancelled. Please try again later!',
    'Your subscription could not be updated. Please try again later!':
      'Your subscription could not be updated. Please try again later!',
    'Your subscription is being cancelled: you will lose the benefits at the end of the period you already paid for.':
      'Your subscription is being cancelled: you will lose the benefits at the end of the period you already paid for.',
    'Your subscription is now cancelled.':
      'Your subscription is now cancelled.',
    'YourGame.json': 'YourGame.json',
    Youtube: 'Youtube',
    "You\u2019re about to permanently delete this leaderboard and all of its entries. This can't be undone.":
      "You\u2019re about to permanently delete this leaderboard and all of its entries. This can't be undone.",
    'You\u2019re about to permanently delete your GDevelop account username@mail.com. You will no longer be able to log into the app with this email address.':
      'You\u2019re about to permanently delete your GDevelop account username@mail.com. You will no longer be able to log into the app with this email address.',
    'You\u2019re about to permanently delete your project {projectName}. You will no longer be able to access it.': function(
      a
    ) {
      return [
        'You\u2019re about to permanently delete your project ',
        a('projectName'),
        '. You will no longer be able to access it.',
      ];
    },
    'You\u2019re now ready to learn the basics of GDevelop.':
      'You\u2019re now ready to learn the basics of GDevelop.',
    Z: 'Z',
    'Z Order': 'Z Order',
    'Z Order of objects created from events':
      'Z Order of objects created from events',
    'Zoom In': 'Zoom In',
    'Zoom Out': 'Zoom Out',
    'Zoom in': 'Zoom in',
    'Zoom in (you can also use Ctrl + Mouse wheel)':
      'Zoom in (you can also use Ctrl + Mouse wheel)',
    'Zoom out': 'Zoom out',
    'Zoom out (you can also use Ctrl + Mouse wheel)':
      'Zoom out (you can also use Ctrl + Mouse wheel)',
    'Zoom to fit content': 'Zoom to fit content',
    'Zoom to fit selection': 'Zoom to fit selection',
    'Zoom to initial position': 'Zoom to initial position',
    'a permanent': 'a permanent',
    add: 'add',
    'an instant': 'an instant',
    by: 'by',
    contains: 'contains',
    'date,date': 'date,date',
    'date,date,date0': 'date,date,date0',
    delete: 'delete',
    'divide by': 'divide by',
    'ends with': 'ends with',
    false: 'false',
    'gd.games': 'gd.games',
    'gd.games thumbnail': 'gd.games thumbnail',
    'iOS & Android (manual)': 'iOS & Android (manual)',
    'iOS (iPhone and iPad) icons': 'iOS (iPhone and iPad) icons',
    'in {elementsWithWords}': function(a) {
      return ['in ', a('elementsWithWords')];
    },
    'macOS (zip file)': 'macOS (zip file)',
    'macOS (zip)': 'macOS (zip)',
    minutes: 'minutes',
    'multiply by': 'multiply by',
    no: 'no',
    or: 'or',
    'or {0}\u20AC/seat/year': function(a) {
      return ['or ', a('0'), '\u20AC/seat/year'];
    },
    'or {0}\u20AC/year': function(a) {
      return ['or ', a('0'), '\u20AC/year'];
    },
    'set to': 'set to',
    'starts with': 'starts with',
    subtract: 'subtract',
    'the events sheet': 'the events sheet',
    'the home page': 'the home page',
    'the scene editor': 'the scene editor',
    true: 'true',
    username: 'username',
    yes: 'yes',
    '{0}': function(a) {
      return [a('0')];
    },
    '{0} % of players with more than {1} minutes': function(a) {
      return [a('0'), ' % of players with more than ', a('1'), ' minutes'];
    },
    '{0} (default)': function(a) {
      return [a('0'), ' (default)'];
    },
    '{0} Assets': function(a) {
      return [a('0'), ' Assets'];
    },
    '{0} Dashboard': function(a) {
      return [a('0'), ' Dashboard'];
    },
    '{0} builds': function(a) {
      return [a('0'), ' builds'];
    },
    '{0} children': function(a) {
      return [a('0'), ' children'];
    },
    '{0} feedback cards': function(a) {
      return [a('0'), ' feedback cards'];
    },
    '{0} minutes per player': function(a) {
      return [a('0'), ' minutes per player'];
    },
    '{0} options': function(a) {
      return [a('0'), ' options'];
    },
    '{0} players with more than {1} minutes': function(a) {
      return [a('0'), ' players with more than ', a('1'), ' minutes'];
    },
    '{0} properties': function(a) {
      return [a('0'), ' properties'];
    },
    '{0} sessions': function(a) {
      return [a('0'), ' sessions'];
    },
    '{0} variables': function(a) {
      return [a('0'), ' variables'];
    },
    '{0}% bounce rate': function(a) {
      return [a('0'), '% bounce rate'];
    },
    "{0}'s projects": function(a) {
      return [a('0'), "'s projects"];
    },
    '{0}/{1} achievements': function(a) {
      return [a('0'), '/', a('1'), ' achievements'];
    },
    '{0}\u20AC/month': function(a) {
      return [a('0'), '\u20AC/month'];
    },
    '{0}\u20AC/seat/month': function(a) {
      return [a('0'), '\u20AC/seat/month'];
    },
    '{durationInMinutes} minutes': function(a) {
      return [a('durationInMinutes'), ' minutes'];
    },
    '{functionNode} action from {extensionNode} extension is missing.': function(
      a
    ) {
      return [
        a('functionNode'),
        ' action from ',
        a('extensionNode'),
        ' extension is missing.',
      ];
    },
    '{functionNode} action on behavior {behaviorNode} from {extensionNode} extension is missing.': function(
      a
    ) {
      return [
        a('functionNode'),
        ' action on behavior ',
        a('behaviorNode'),
        ' from ',
        a('extensionNode'),
        ' extension is missing.',
      ];
    },
    '{functionNode} condition from {extensionNode} extension is missing.': function(
      a
    ) {
      return [
        a('functionNode'),
        ' condition from ',
        a('extensionNode'),
        ' extension is missing.',
      ];
    },
    '{functionNode} condition on behavior {behaviorNode} from {extensionNode} extension is missing.': function(
      a
    ) {
      return [
        a('functionNode'),
        ' condition on behavior ',
        a('behaviorNode'),
        ' from ',
        a('extensionNode'),
        ' extension is missing.',
      ];
    },
    '{resultsCount} results': function(a) {
      return [a('resultsCount'), ' results'];
    },
    '~{0} minutes.': function(a) {
      return ['~', a('0'), ' minutes.'];
    },
    '\u201CHow do I\u201D forum': '\u201CHow do I\u201D forum',
    '\u201CStart\u201D screen': '\u201CStart\u201D screen',
    '\u201CYou win\u201D message': '\u201CYou win\u201D message',
    '\u2260 (not equal to)': '\u2260 (not equal to)',
    '\u2264 (less or equal to)': '\u2264 (less or equal to)',
    '\u2265 (greater or equal to)': '\u2265 (greater or equal to)',
    '\u2705 Owned': '\u2705 Owned',
    '\uD83D\uDC47\uD83D\uDC47\uD83D\uDC47':
      '\uD83D\uDC47\uD83D\uDC47\uD83D\uDC47',
    '\uD83D\uDC49 **Events** are the logic to your game.':
      '\uD83D\uDC49 **Events** are the logic to your game.',
    '\uD83D\uDC49 Behaviors add features to objects in a matter of clicks. They are very powerful!':
      '\uD83D\uDC49 Behaviors add features to objects in a matter of clicks. They are very powerful!',
    '\uD83D\uDC49 Everything you see in a game is an **object**: your character, the enemies, coins and potions, platforms or trees, ...':
      '\uD83D\uDC49 Everything you see in a game is an **object**: your character, the enemies, coins and potions, platforms or trees, ...',
    '\uD83D\uDC4B Good to see you {username}!': function(a) {
      return ['\uD83D\uDC4B Good to see you ', a('username'), '!'];
    },
    '\uD83D\uDC4B Good to see you!': '\uD83D\uDC4B Good to see you!',
    '\uD83D\uDC4B Welcome to GDevelop {username}!': function(a) {
      return ['\uD83D\uDC4B Welcome to GDevelop ', a('username'), '!'];
    },
    '\uD83D\uDC4B Welcome to GDevelop!': '\uD83D\uDC4B Welcome to GDevelop!',
  },
};
