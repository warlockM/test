export default function Footer() {
    return (
      <div class="flex space-x-8 bg-slate-600 text-white place-content-center">
        <div class="p-4">
          <ul>
            <li>FAQ</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div class="p-4">
          <ul>
            <li  class = "font-bold underline">Social</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>

        <div class="p-4">
          <ul>
            <li class = "font-bold underline">Services</li>
            <li>Schools</li>
            <li>Corporate</li>
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