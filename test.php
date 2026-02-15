<?php
// Mengizinkan akses dari aplikasi mana saja (CORS)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Data ini bisa kamu ambil dari Database MySQL nantinya
$update_data = [
    "status" => "success",
    "latest_version" => "1.0.4",
    "version_code" => 4,
    "download_url" => "https://github.com/cyrust-app/ffxsensix/raw/main/docs/public/app-release.apk",
    "changelog" => [
        "Optimasi DPI khusus InfinityFree",
        "API sekarang berbasis PHP Dinamis",
        "Perbaikan bug koneksi"
    ],
    "force_update" => false
];

echo json_encode($update_data, JSON_PRETTY_PRINT);
?>
