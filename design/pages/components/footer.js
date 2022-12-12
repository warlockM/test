export default function Footer() {
    return (
      <div class="sm:grid sm:grid-cols-1 md:grid md:grid-cols-4 md:gap-1 bg-slate-600 text-white place-content-center">
        <div class="p-4">
          <ul>
            <li>FAQ</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>©2022</li>
          </ul>
        </div>

        <div class="p-4">
          <ul>
            <li  class = "font-bold underline">Social</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li><a href="https://www.instagram.com/dr.bhoomikasachacher/" target="_blank">Instagram</a></li>
            <li>LinkedIn</li>
          </ul>
        </div>

        <div class="p-4">
          <ul>
            <li class = "font-bold underline">Services</li>
            <li>Schools</li>
            <li>Individual</li>
          </ul>
        </div>
        <div class="p-4 text-lg">
          <ul>
            <li>News</li>
            <li>Blogs</li>
          </ul>
        </div>
      </div>
    );
}