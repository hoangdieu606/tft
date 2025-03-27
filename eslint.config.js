export default [
    {
        ignores: ["node_modules/", "dist/", "build/"], // Bỏ qua folder không cần kiểm tra
    },
    {
        languageOptions: {
            ecmaVersion: "latest", // Hỗ trợ ES6+
            sourceType: "module",
        },
        rules: {
            "no-unused-vars": ["warn", { "args": "none" }], // Cảnh báo biến không dùng, nhưng bỏ qua tham số function chưa dùng
            "no-console": "warn", // Cảnh báo console.log()
            "eqeqeq": "warn", // Cảnh báo nếu dùng == thay vì ===
            "curly": "warn", // Cảnh báo dùng {} với if/else
            "no-var": "error", // Cấm dùng var, khuyến khích let/const
            "prefer-const": "error", // Bắt buộc dùng const nếu biến không bị gán lại
        },
    },
]


/* npx eslint .

"off": tắt cảnh báo;
"warn": cảnh báo
"error": báo lỗi;
 */