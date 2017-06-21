Jest manual mocks should only mock node_modules if \_\_mocks\_\_ is in the same directory as node_modules.

If there is another file named history, that can be accessed as import 'utils/history', its mock should not affect
the `history` module.

I believe this issue is being tracked at https://github.com/facebook/jest/issues/2070