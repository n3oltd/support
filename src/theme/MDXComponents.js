// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import K2Link from '@site/src/components/K2Link';

// All the Component Specified Here Will be avaiable in mdx.
export default {
  // Re-use the default mapping
  ...MDXComponents,
  K2Link,
};