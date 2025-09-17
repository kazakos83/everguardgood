@@ .. @@
 const nextConfig = {
   distDir: process.env.NEXT_DIST_DIR || '.next',
-  output: process.env.NEXT_OUTPUT_MODE,
+  output: 'standalone',
   experimental: {
     outputFileTracingRoot: path.join(__dirname, '../'),
   },
@@ .. @@
   typescript: {
     ignoreBuildErrors: false,
   },
-  images: { unoptimized: true },
+  images: { 
+    unoptimized: true,
+    domains: ['images.pexels.com']
+  },
+  trailingSlash: false,
 };