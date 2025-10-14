export function SiteFooter() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-4">
        <div className="space-y-2">
          <div className="font-semibold tracking-tight text-lg">
            <span className="text-primary">Virtue</span> Tech
          </div>
          <p className="text-sm text-muted-foreground">
            An integrated learning platform for students, tutors, parents, admins, and institutions.
          </p>
        </div>
        <div>
          <div className="font-medium mb-2">Product</div>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/about" className="hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-primary">
                FAQ
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-primary">
                Contact
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-primary">
                Terms
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">Panels</div>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/student" className="hover:text-primary">
                Student
              </a>
            </li>
            <li>
              <a href="/teacher" className="hover:text-primary">
                Teacher
              </a>
            </li>
            <li>
              <a href="/parent" className="hover:text-primary">
                Parent
              </a>
            </li>
            <li>
              <a href="/institution" className="hover:text-primary">
                Institution
              </a>
            </li>
            <li>
              <a href="/admin" className="hover:text-primary">
                Admin
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">Follow</div>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-primary">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} Virtue Tech</span>
          <a className="hover:text-primary" href="/privacy">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  )
}
